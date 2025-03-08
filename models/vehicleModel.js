const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
    {
        carMake: { type: String, required: true },
        model: { type: String, required: true },
        modelVariant: { type: String, required: true },
        price: { type: Number, required: true },
        brakeHorsePower: { type: Number, required: true },
        acceleration: { type: Number, required: true }, // 0-60mph time
        topSpeed: { type: Number, required: true },
        slowChargeTime: { type: String, required: true }, // 2.3kW charge time
        fastChargeTime: { type: String, required: true }, // 22kW charge time
        rapidChargeTime: { type: String, required: true }, // 50kW charge time
        topUpChargeTime: { type: String, required: true },
        luggageCapacitySeatsUp: { type: Number, required: true },
        luggageCapacitySeatsDown: { type: Number, required: true },
        dimensions: { type: String, required: true }, // h x l x w
        batteryRange: { type: Number, required: true },
        batteryCapacity: { type: Number, required: true },
        seats: { type: Number, required: true },
        doors: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
