const express = require("express");
const {
    getVehicles,
    createVehicle,
    updateVehicle,
    getVehicleById,
    deleteVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

router.get("/", getVehicles);
router.post("/", createVehicle);
router.put("/:id", updateVehicle);
router.get("/:id", getVehicleById);
router.delete("/:id", deleteVehicle);

module.exports = router;
