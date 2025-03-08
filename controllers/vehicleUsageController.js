const VehicleUsage = require("../models/vehicleUsageModel");

// Create a new vehicle usage entry
const createVehicleUsage = async (req, res, next) => {
    try {
        const newUsage = new VehicleUsage(req.body);
        const savedUsage = await newUsage.save();
        res.status(201).json({ message: "Vehicle usage created successfully", data: savedUsage });
    } catch (error) {
        next(error); // Pass the error to errorMiddleware
    }
};

// Get all vehicle usage entries
const getAllVehicleUsage = async (req, res, next) => {
    try {
        const usages = await VehicleUsage.find();
        res.status(200).json({ message: "Vehicle usages fetched successfully", data: usages });
    } catch (error) {
        next(error);
    }
};

// Get a single vehicle usage entry by ID
const getVehicleUsageById = async (req, res, next) => {
    try {
        const usage = await VehicleUsage.findById(req.params.id);
        if (!usage) {
            return res.status(404).json({ message: "Vehicle usage not found" });
        }
        res.status(200).json({ message: "Vehicle usage fetched successfully", data: usage });
    } catch (error) {
        next(error);
    }
};

// Update a vehicle usage entry
const updateVehicleUsage = async (req, res, next) => {
    try {
        const updatedUsage = await VehicleUsage.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedUsage) {
            return res.status(404).json({ message: "Vehicle usage not found" });
        }
        res.status(200).json({ message: "Vehicle usage updated successfully", data: updatedUsage });
    } catch (error) {
        next(error);
    }
};

// Delete a vehicle usage entry
const deleteVehicleUsage = async (req, res, next) => {
    try {
        const usage = await VehicleUsage.findById(req.params.id);
        if (!usage) {
            return res.status(404).json({ message: "Vehicle usage not found" });
        }
        await usage.deleteOne();
        res.status(200).json({ message: "Vehicle usage deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createVehicleUsage,
    getAllVehicleUsage,
    getVehicleUsageById,
    updateVehicleUsage,
    deleteVehicleUsage
};
