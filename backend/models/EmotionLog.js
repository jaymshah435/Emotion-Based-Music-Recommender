const mongoose = require("mongoose");

const emotionLogSchema = new mongoose.Schema({
  emotion: String,
  songs: [
    {
      name: String,
      artist: String,
      preview_url: String,
      external_url: String,
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("EmotionLog", emotionLogSchema);