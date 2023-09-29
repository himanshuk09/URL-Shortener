const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleVisitedHistory
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get('/:shortId',handleVisitedHistory);
module.exports = router;
