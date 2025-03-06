require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

// ------------------------------------------------

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------------------------------------

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ------------------------------------------------

// Basic route
app.use("/api/v1", routes);

// ------------------------------------------------

// Start serve
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
