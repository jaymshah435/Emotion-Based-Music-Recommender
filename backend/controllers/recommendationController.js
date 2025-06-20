const EmotionLog = require("../models/EmotionLog");
const getSongByMood = require("../utils/musicAPI");

// GET /api/recommend/:mood
exports.recommendByMood = async (req, res) => {
  try {
    const emotion = req.params.mood;
    const songs = await getSongByMood(emotion);

    const formattedSongs = songs.map((song) => ({
      name: song.trackName,
      artist: song.artistName,
      preview_url: song.previewUrl,
      external_url: song.trackViewUrl,
    }));

    await EmotionLog.create({ emotion, songs: formattedSongs });
    res.json(formattedSongs);
  } catch (err) {
    console.error("Recommend Error:", err);
    res.status(500).json({ error: "Failed to recommend songs" });
  }
};