const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        ID: {
            type: Number,
            require: true,
            unique: true
        },
        price: {
            type: Number,
            require: true
        },
        viewer: {
            type: Number,
            require: true
        },
        type: {
            type: String,
            enum: ["Kaufen", "Mieten"],
            required: true
        },
        area: {
            type: Number,
            required: true
        },
        room: {
            type: Number,
            required: true
        },
        bathroom: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            enum: ["Wohnung", "Haus", "Doppelhaushalfte", "Einzelhandelsimmobilie"],
            required: true
        },
        address: {
            type: String,
            required: true
        }
    }
)

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;