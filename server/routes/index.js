const express = require("express");
const router = express.Router();

const Controller = require("../controllers/controllers");

router.get("/", Controller.getAll);
router.get("/:id", Controller.getById);
router.post("/sales", Controller.createSales);
router.post("/cancalsales", Controller.cancelSales);
router.post("/create", Controller.createMenu);
router.post("/customer/create", Controller.createCust);

module.exports = router;
