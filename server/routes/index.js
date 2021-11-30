const express = require("express");
const router = express.Router();

const Controller = require("../controllers/controllers");

router.get("/", Controller.getAll);
router.post("/create", Controller.createMenu);

module.exports = router;
