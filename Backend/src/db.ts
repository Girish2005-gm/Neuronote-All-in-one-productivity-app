import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb://localhost:27017/brainly")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));




const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

export const UserModel = model("User", UserSchema);






const ContentSchema = new Schema({
  title: String,
  link: String,
  type: {
    type: String,
    enum: ["document", "link", "youtube", "twitter"], // ✅ Include all types you use
    required: true
  },
  tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});



export const ContentModel = model("Content", ContentSchema);





const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
})

export const LinkModel = model("Link", LinkSchema);





const TagSchema = new Schema({
    name: String
});

export const TagModel = model("Tag", TagSchema);




// module.exports={
//phale ese karte the exports
// }


