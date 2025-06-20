const express = require("express");
const cors = require("cors");

const recommendationRoutes = require("./routes/recommendationRoutes");
const historyRoutes = require("./routes/historyRoutes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recommend", recommendationRoutes);
app.use("/api/history", historyRoutes);

module.exports = app;