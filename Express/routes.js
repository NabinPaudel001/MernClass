const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("HomePage");
});
router.post("/", (req, res, next) => {
  res.send("HomePage from Post");
});

router.post("/contact", (req, res, next) => {
  res.send("Contact Page");
});

router.post("/about", (req, res, next) => {
  res.send("About Page");
});

router.post("/article/:id/reviews/:review_id", (req, res, next) => {
  const { params, query, body } = req;
  res.send({ params, query, body });
});

router.use((req, res, next) => {
  next("URL not found");
});
module.exports = router;
