import express from "express"
import jwt from "jsonwebtoken"
import { ContentModel, LinkModel, UserModel } from "./db"
const app = express()
import { JWT_PASSWORD } from "./config"
import { userMiddleware } from "./middleware"
import { random } from "./utils"
import cors from 'cors';
app.use(cors());

app.use(express.json())

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existsUser = await UserModel.findOne({
        username,
        password
    });

    if (existsUser) {
        const token = jwt.sign({
            id: existsUser._id,
            username: existsUser.username  // ✅ Add this line!
        }, JWT_PASSWORD, { expiresIn: "7d" });

        res.json({
            token
        });
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }
});


app.post("/api/v1/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        await UserModel.create({
            username: username,
            password: password
        })
        res.json({
            message: "user signed up"
        })
    }
    catch (e) {
        res.status(411).json({
            message: "user already exists"
        })
    }
})



app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;
    const title= req.body.title
    await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "contene added"
    })

})


app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")

    res.json({
        content
    })

})

// DELETE /api/v1/content/:id
app.delete("/api/v1/content/:id", userMiddleware, async (req, res) => {
  const contentId = req.params.id;
  try {
    await ContentModel.deleteOne({
      _id: contentId,
      //@ts-ignore
      userId: req.userId
    });
    res.json({ message: "Content deleted successfully" });
  } catch (e) {
    console.error("Delete error:", e);
    res.status(500).json({ error: "Error deleting content" });
  }
});


app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share
    if (share) {
        const existinglink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        })
        if (existinglink) {
            res.json({
                hash: existinglink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })
        res.json({
            message: "/share" + hash
        })
    }
    else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        });
        res.json({
            message: "Removed Link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash
    })
    if (!link) {
        res.status(411).json({
            message: "sorry incorrect input"
        })
        return
    }
    //usrid
    const content = await ContentModel.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found , error should ideally not happen"
        })
        return
    }
    res.json({
        username: user.username,
        content: content
    })
})


app.listen(3000, () => {
    console.log("app listining at 3000")
})

