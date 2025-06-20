# 🎵 Emotion-Based Music Recommender

A full-stack web app that detects facial emotion using your webcam and recommends music based on the detected mood using the iTunes API. It also saves a history of detected emotions and suggested songs using MongoDB.

---

## 🎥 Demo

Screenshots available in the demo folder.

---

## ✨ Features

- Real-time facial emotion detection via webcam  
- Music recommendations tailored to emotions  
- Client-side emotion analysis using `face-api.js`  
- iTunes API for music suggestions (no auth needed)  
- Emotion + song history saved in MongoDB  
- Clean and responsive React UI with Tailwind CSS

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, face-api.js  
- **Backend:** Node.js, Express.js, Mongoose  
- **Database:** MongoDB  
- **APIs:** iTunes Search API  
- **Other Tools:** Axios, dotenv, cors, react-router

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Create a `.env` file with MongoDB config:
    ```env
    PORT=3001
    MONGODB_URI=your_mongodb_connection_string
    ```

3. Install dependencies and start the server:
    ```bash
    npm install
    npm run dev
    ```

> Your backend will run at: `http://localhost:3001`

---

### 💻 Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install dependencies and start Vite dev server:
    ```bash
    npm install
    npm run dev
    ```

> Your frontend will run at: `http://localhost:5173`

---

### 📁 face-api.js Model Setup

1. Download models from [here](https://github.com/justadudewhohacks/face-api.js-models)

2. Place them inside:
    ```
    frontend/public/models/
    ```

---

## 🚀 Usage

1. Open the app in your browser  
2. Allow webcam access when prompted  
3. Click **"Detect Emotion & Suggest Song"**  
4. View emotion + song suggestions  
5. Browse history of past detections via the **History** page

---

## 📌 Notes

- Emotion detection runs in-browser using `face-api.js`  
- Music is fetched based on mapped emotion-to-genre logic  
- iTunes API does not require authentication  
- Make sure MongoDB Atlas access is allowed from your IP  
- Webcam must be enabled for emotion detection

---

## 📄 License

MIT License

---

## 🤝 Contribute

Feel free to open issues, suggest features, or submit pull requests!
