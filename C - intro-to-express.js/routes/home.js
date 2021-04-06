const { Router } = require("express");
const path = require("path");

const router = Router();

//? example of routing on `/`
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/contact-us.html"));
});

router.post("/contact-us", (req, res) => {
  res.send({ message: "message received" });
});

router
  .route("/submit")
  .get((req, res) => {})
  .post((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
