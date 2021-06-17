const  express = require("express");

const  router = express.Router();

router.use("/admin", require(__dirname + "/admin"));
router.use("/default", require(__dirname + "/default"));
router.use("/auth", require(__dirname + "/auth"));
router.use("/category", require(__dirname + "/movies"));
router.use("/insert", require(__dirname + "/category"));
//router chung cho tất cả hệ thống
router.get("/", async function (req, res) {
  res.redirect("/default");
});

router.get("*", async function (req, res) {
  res.redirect("/default");
});

module.exports = router;