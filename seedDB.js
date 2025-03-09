require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./dbConnection");
const Property = require("./src/models/property");
const properties = require("./data");

const seedDB = async () => {
    try {
        await connectDB();

        await Property.deleteMany();
        console.log("Existing properties removed");

        await Property.insertMany(properties);
        console.log("Properties inserted successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting properties:", error);
        mongoose.connection.close();
    }
};

module.exports = seedDB;
