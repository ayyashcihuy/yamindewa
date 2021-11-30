const express = require("express");
const router = express.Router();

const Controller = require("../controllers/controllers");

router.get("/", Controller.getAll);
router.get("/:id", Controller.getById);
router.post("/create", Controller.createMenu);
router.post("/customer/create", Controller.createCust);

module.exports = router;
