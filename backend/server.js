
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/properties", propertyRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Real Estate API Running...");
});

// Error Handling Middleware (Always at the end)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});