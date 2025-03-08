const mongoose = require("mongoose");

const chargingPointSchema = new mongoose.Schema(
    {
        postcode: { type: String, required: true, minlength: 4, maxlength: 20 },
        powerLevel: { type: String, required: true, minlength: 1, maxlength: 50 },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        address: { type: String, required: true, minlength: 5, maxlength: 255 }
    },
    { timestamps: true }
);

module.exports = mongoose.model("ChargingPoint", chargingPointSchema);
