const express = require("express");
const router = express.Router();

const {
  addProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

// Add Property
router.post("/", addProperty);

// Get All Properties (Search + Filter + Pagination)
router.get("/", getAllProperties);

// Get Property By ID
router.get("/:id", getPropertyById);

// Update Property
router.put("/:id", updateProperty);

// Delete Property
router.delete("/:id", deleteProperty);

module.exports = router;