const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'..', "views", "index.html"));
});
router.get("/new-page(.html)", (req, res) => {
  res.sendFile(path.join(__dirname,'..', "views", "new-page.html"));
});
router.get("/old(.html)", (req, res) => {
  res.status("301").redirect("new-page");
});

router.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname,'..', "views", "404.html"));
});



module.exports = router;