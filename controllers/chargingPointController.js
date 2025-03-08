const ChargingPoint = require("../models/chargingPointModel");

// Create a new charging point
const createChargingPoint = async (req, res, next) => {
    try {
        const newChargingPoint = new ChargingPoint(req.body);
        const savedChargingPoint = await newChargingPoint.save();
        res.status(201).json({ message: "Charging point created successfully", data: savedChargingPoint });
    } catch (error) {
        next(error);
    }
};

// Get all charging points
const getAllChargingPoints = async (req, res, next) => {
    try {
        const chargingPoints = await ChargingPoint.find();
        res.status(200).json({ message: "Charging points fetched successfully", data: chargingPoints });
    } catch (error) {
        next(error);
    }
};

// Get a charging point by ID
const getChargingPointById = async (req, res, next) => {
    try {
        const chargingPoint = await ChargingPoint.findById(req.params.id);
        if (!chargingPoint) {
            return res.status(404).json({ message: "Charging point not found" });
        }
        res.status(200).json({ message: "Charging point fetched successfully", data: chargingPoint });
    } catch (error) {
        next(error);
    }
};

// Update a charging point
const updateChargingPoint = async (req, res, next) => {
    try {
        const updatedChargingPoint = await ChargingPoint.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedChargingPoint) {
            return res.status(404).json({ message: "Charging point not found" });
        }
        res.status(200).json({ message: "Charging point updated successfully", data: updatedChargingPoint });
    } catch (error) {
        next(error);
    }
};

// Delete a charging point
const deleteChargingPoint = async (req, res, next) => {
    try {
        const chargingPoint = await ChargingPoint.findById(req.params.id);
        if (!chargingPoint) {
            return res.status(404).json({ message: "Charging point not found" });
        }
        await chargingPoint.deleteOne();
        res.status(200).json({ message: "Charging point deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createChargingPoint,
    getAllChargingPoints,
    getChargingPointById,
    updateChargingPoint,
    deleteChargingPoint
};
