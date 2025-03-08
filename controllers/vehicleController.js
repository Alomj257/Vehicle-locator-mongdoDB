const Vehicle = require("../models/vehicleModel");

// @desc Get all vehicles
// @route GET /api/vehicles
const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json({
            message: "Vehicles retrieved successfully",
            data: vehicles
        });
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc Create a new vehicle
// @route POST /api/vehicles
const createVehicle = async (req, res) => {
    try {
        const {
            carMake,
            model,
            modelVariant,
            price,
            brakeHorsePower,
            acceleration,
            topSpeed,
            slowChargeTime,
            fastChargeTime,
            rapidChargeTime,
            topUpChargeTime,
            luggageCapacitySeatsUp,
            luggageCapacitySeatsDown,
            dimensions,
            batteryRange,
            batteryCapacity,
            seats,
            doors,
        } = req.body;

        if (!carMake || !model || !modelVariant || !price || !brakeHorsePower) {
            return res.status(400).json({ message: "Please fill all required fields" });
        }

        const newVehicle = new Vehicle({
            carMake,
            model,
            modelVariant,
            price,
            brakeHorsePower,
            acceleration,
            topSpeed,
            slowChargeTime,
            fastChargeTime,
            rapidChargeTime,
            topUpChargeTime,
            luggageCapacitySeatsUp,
            luggageCapacitySeatsDown,
            dimensions,
            batteryRange,
            batteryCapacity,
            seats,
            doors,
        });

        const savedVehicle = await newVehicle.save();
        res.status(201).json({
            message: "Vehicle created successfully",
            data: savedVehicle
        });
    } catch (error) {
        console.error("Error creating vehicle:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }    
};

// @desc Update a vehicle
// @route PUT /api/vehicles/:id
const updateVehicle = async (req, res) => {
    try {
        // Check if the vehicle exists
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        // Update the vehicle
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Return updated doc & validate fields
        );

        res.status(200).json({
            message: "Vehicle updated successfully",
            data: updatedVehicle
        });
    } catch (error) {
        console.error("Error updating vehicle:", error); // Log exact error
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc Get vehicle by ID
// @route GET /api/vehicles/:id
const getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        res.status(200).json({
            message: "Vehicle fetched successfully",
            data: vehicle
        });
    } catch (error) {
        console.error("Error fetching vehicle by ID:", error); // Logs the exact error
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc Delete a vehicle
// @route DELETE /api/vehicles/:id
const deleteVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        await vehicle.deleteOne();
        res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
        console.error("Error deleting vehicle:", error); // Logs the exact error
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { getVehicles, createVehicle, updateVehicle, getVehicleById, deleteVehicle };
