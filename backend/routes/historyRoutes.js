const express = require("express");
const router = express.Router();
const { getHistory } = require("../controllers/historyController");


// Mood-based recommendation
router.get("/", getHistory);

module.exports = router;