const Property = require("../models/property");

// --------------------------------------------------------

const propertyController = async (req, res) => {
    try {
        const { type, category, minPrice, maxPrice, minArea, maxArea, room, page = 1, limit = 9, search } = req.query;

        let filter = {};

        if (type) filter.type = type;
        if (category) filter.category = category;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }
        if (minArea || maxArea) {
            filter.area = {};
            if (minArea) filter.area.$gte = Number(minArea);
            if (maxArea) filter.area.$lte = Number(maxArea);
        }
        if (room) {
            const roomArray = room.split(",").map(Number);
            filter.room = { $in: roomArray };
        }

        if (search) {
            console.log('called', search)
            if (/^\d+$/.test(search)) {
                filter.zipcode = Number(search);
            } else {
                filter.$or = [
                    { city: { $regex: search, $options: "i" } },
                    { state: { $regex: search, $options: "i" } }
                ];
            }
        }

        const totalProperties = await Property.countDocuments(filter);

        const properties = await Property.find(filter)
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));

        res.json({
            total: totalProperties,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(totalProperties / Number(limit)),
            properties
        });
    } catch (error) {
        console.error("Error fetching properties:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = propertyController;
