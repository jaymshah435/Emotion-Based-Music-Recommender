const EmotionLog = require("../models/EmotionLog");

// GET /api/history
exports.getHistory = async (req, res) => {
  try {
    const history = await EmotionLog.find().sort({ timestamp: -1 });
    
    res.json(history);
  } catch (err) {
    console.error("History Error:", err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};