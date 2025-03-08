const Vehicle = require("../models/vehicleModel");

// @desc Get all vehicles
// @route GET /api/vehicles
const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
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
        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// @desc Update a vehicle
// @route PUT /api/vehicles/:id
const updateVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return updated document
        );

        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
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
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
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
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getVehicles, createVehicle, updateVehicle, getVehicleById, deleteVehicle };
