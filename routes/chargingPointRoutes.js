const express = require("express");
const {
    createChargingPoint,
    getAllChargingPoints,
    getChargingPointById,
    updateChargingPoint,
    deleteChargingPoint
} = require("../controllers/chargingPointController");

const router = express.Router();

router.post("/", createChargingPoint);
router.get("/", getAllChargingPoints);
router.get("/:id", getChargingPointById);
router.put("/:id", updateChargingPoint);
router.delete("/:id", deleteChargingPoint);

module.exports = router;
