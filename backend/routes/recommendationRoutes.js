const express = require("express");
const router = express.Router();
const {
  recommendByMood,
} = require("../controllers/recommendationController");


// Mood-based recommendation
router.get("/:mood", recommendByMood);

module.exports = router;