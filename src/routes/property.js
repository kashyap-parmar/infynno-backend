const { Router } = require("express")
const propertyController = require("../controller/property")

// ---------------------------------------------

const router = Router()

// ---------------------------------------------

router.get("/properties", propertyController)

// ---------------------------------------------

module.exports = router;