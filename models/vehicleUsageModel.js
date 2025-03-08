const mongoose = require("mongoose");

const vehicleUsageSchema = new mongoose.Schema(
    {
        makeModel: { type: String, required: true, minlength: 2, maxlength: 100 },
        carType: { type: String, required: true, minlength: 2, maxlength: 100 },
        distanceType: { type: String, enum: ["Miles", "Kilometers"], required: true },
        fuelEfficiency: { type: Number, required: true, min: 0 },
        fuelType: { type: String, enum: ["Petrol", "Diesel", "Electric", "Hybrid"], required: true },
        fuelCost: { type: Number, required: true, min: 0 },
        tripLabel: { type: String, minlength: 2, maxlength: 100 },
        tripFrequency: { type: String, enum: ["daily (5-7 days a week)", "weekly (1-4 days a week)", "monthly (1-3 days a month)"] },
        tripDistance: { type: Number, min: 0 }
    },
    { timestamps: true }
);

module.exports = mongoose.model("VehicleUsage", vehicleUsageSchema);
