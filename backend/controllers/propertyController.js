const Property = require("../models/Property");


// ADD PROPERTY

const addProperty = async (req, res) => {
    try {
        const {
            title,
            propertyType,
            price,
            location,
            area,
            bedrooms,
            bathrooms,
            description,
            imageUrl,
        } = req.body;

        // Basic validation
        if (
            !title ||
            !propertyType ||
            price === undefined ||
            !location ||
            !area ||
            bedrooms === undefined ||
            bathrooms === undefined ||
            !description ||
            !imageUrl
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        const numericPrice = Number(price);

        // PRICE VALIDATION
        if (isNaN(numericPrice) || numericPrice < 100000) {
            return res.status(400).json({
                success: false,
                message: "Price must be at least ₹1,00,000",
            });
        }

        const property = await Property.create({
            title,
            propertyType,
            price: numericPrice,
            location,
            area,
            bedrooms,
            bathrooms,
            description,
            imageUrl,
        });

        res.status(201).json({
            success: true,
            message: "Property Added Successfully",
            property,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// GET ALL PROPERTIES

const getAllProperties = async (req, res) => {
    try {
        const {
            location,
            propertyType,
            page = 1,
            limit = 6,
            sort = "newest",
        } = req.query;

        let query = {};

        if (location) {
            query.location = {
                $regex: location,
                $options: "i",
            };
        }

        if (propertyType) {
            query.propertyType = propertyType;
        }

        let sortOption = {};

        if (sort === "low") {
            sortOption.price = 1;
        } else if (sort === "high") {
            sortOption.price = -1;
        } else {
            sortOption.createdAt = -1;
        }

        const total = await Property.countDocuments(query);

        const properties = await Property.find(query)
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            totalPages: Math.ceil(total / limit),
            properties,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// GET PROPERTY BY ID

const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property Not Found",
            });
        }

        res.status(200).json({
            success: true,
            property,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// UPDATE PROPERTY

const updateProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property Not Found",
            });
        }

        // PRICE VALIDATION ON UPDATE
        if (req.body.price !== undefined) {
            const numericPrice = Number(req.body.price);

            if (isNaN(numericPrice) || numericPrice < 100000) {
                return res.status(400).json({
                    success: false,
                    message: "Price must be at least ₹1,00,000",
                });
            }

            req.body.price = numericPrice;
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "Property Updated Successfully",
            updatedProperty,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// DELETE PROPERTY

const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property Not Found",
            });
        }

        await property.deleteOne();

        res.status(200).json({
            success: true,
            message: "Property Deleted Successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
};