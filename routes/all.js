const express = require("express");
const router = express.Router();

const { Home, getList } = require("../controllers/all");

router.get("/", Home);
router.post("/getList", getList);

module.exports = router;