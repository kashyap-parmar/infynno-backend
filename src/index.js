require("dotenv").config();
const express = require("express");
const propertyRoute = require("./routes/property");
const connectDB = require("../dbConnection");
const cors = require("cors");
const seedDB = require("../seedDB");

// -------------------------------------------------------

const app = express();

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
}));

// -------------------------------------------------------

(async () => {

    await seedDB()

    const PORT = process.env.PORT || 3000;

    app.use("/api/v1", propertyRoute);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();
