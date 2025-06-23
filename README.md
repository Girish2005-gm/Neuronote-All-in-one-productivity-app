# 🧠 Neuronote

Neuronote is an all-in-one productivity app that allows users to collect, organize, and share various types of content including notes, tweets, videos, links, and documents — all within a clean and modern dashboard. Whether you're a student, developer, or content creator, Neuronote helps you keep your digital knowledge base centralized and accessible.

---

## 🚀 Features

* 🔐 **Authentication**: Secure login and registration using JWT tokens.
* 🧠 **Multi-content Support**: Add, view, and delete various types of data:

  * Text Notes
  * YouTube Videos (via link embedding)
  * Tweets (via tweet link embedding)
  * Web Links (with titles and preview)
  * Document links
* 🔗 **Share Links**: Generate and share unique links to public content.
* 📁 **Clean Dashboard**: Intuitive, Notion-like content layout.
* ⚙️ **Persistent Storage**: Uses MongoDB for data storage and retrieval.

---

## 🛠️ Tech Stack

### Frontend

* **React** with **TypeScript** for scalable UI development
* **Tailwind CSS** for styling
* **React Router** for navigation
* **Axios** for API requests
* **Context** API for state management

### Backend

* **Node.js** with **Express.js** for REST API
* **MongoDB Atlas** for cloud database
* **Mongoose** for schema modeling
* **JWT** for user authentication
* **CORS** & **dotenv** for environment and security config

### Deployment

* **Frontend**: [Vercel](https://vercel.com/)
* **Backend**: [Render](https://render.com/)
* **Database**: MongoDB Atlas (Cloud Hosted)

---

## 📁 Project Structure

```bash
Neuronote/
├── Frontend/               # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── icons/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.tsx
│   │   └── ProtectedRoute.tsx
│   └── index.html
├── Backend/               # Backend (Node.js + Express)
│   └──  db.ts
│   └──  config.ts
│   └── utils.ts
│   └── middleware.ts
│   └── index.ts
└── README.md
```

---

## 🧪 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/neuronote.git
cd neuronote
```

### 2. Setup the Backend

```bash
cd Backend
npm install
touch .env
```

#### .env example

```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup the Frontend

```bash
cd ../Frontend
npm install
```

#### Create a `.env` file

```env
VITE_API_BASE_URL=https://your-backend.onrender.com
```

Start the frontend development server:

```bash
npm run dev
```

---

## 🌐 Environment Variables Summary

### Frontend

* `VITE_API_BASE_URL=https://your-backend.onrender.com`

### Backend

* `PORT=5000`
* `MONGO_URI=your-mongodb-url`
* `JWT_SECRET=your-jwt-secret`

---

## 🔗 Share Route Setup for Vercel

To support client-side routing (like `/share/:id`) on Vercel, add a `vercel.json` file in your project root:

#### `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This ensures React Router can handle dynamic routes properly after deployment.

---

## 📸 Demo
* **Live App**:(https://neuronote-all-in-one-productivity-a.vercel.app/)
---

## ✨ Future Improvements

* ⌛ Add dark mode support
* 📝 Add rich text editor for notes
* 📊 Add analytics/dashboard for users
* 📂 Grouping and folders for better organization
* 🧑‍🤝‍🧑 Collaboration and multi-user access

---

## 👨‍💻 Author

**Girish Maheshwari**
[LinkedIn](https://www.linkedin.com/in/girish-maheshwari-10402925a/)
[GitHub](https://github.com/Girish2005-gm)

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, distribute, and modify it for learning or personal projects.

---

> Built with ❤️ by Girish Maheshwari
