const axios = require("axios");

// Map mood to music genre
const moodToGenre = {
  neutral: "Classical",
  happy: "Dance",
  sad: "R&B/Soul",
  angry: "Rock",
  fearful: "Soundtrack",
  disgusted: "Metal",
  surprised: "Jazz",
};

async function getSongByMood(mood) {
  const genre = moodToGenre[mood] || "Pop"; // Default genre
  const res = await axios.get("https://itunes.apple.com/search", {
    params: {
      term: genre,
      entity: "song",
      limit: 50,
    },
  });

  const filtered = res.data.results.filter(
    (track) => track.primaryGenreName === genre
  );

  return filtered.sort(() => 0.5 - Math.random()).slice(0, 6);
}

module.exports = getSongByMood;