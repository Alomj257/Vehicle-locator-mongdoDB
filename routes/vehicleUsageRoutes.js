const express = require("express");
const {
    createVehicleUsage,
    getAllVehicleUsage,
    getVehicleUsageById,
    updateVehicleUsage,
    deleteVehicleUsage
} = require("../controllers/vehicleUsageController");

const router = express.Router();

router.post("/", createVehicleUsage);
router.get("/", getAllVehicleUsage);
router.get("/:id", getVehicleUsageById);
router.put("/:id", updateVehicleUsage);
router.delete("/:id", deleteVehicleUsage);

module.exports = router;
