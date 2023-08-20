const express = require("express");
const router = express.Router();
const donutController = require("../../../controllers/api/v1/donuts");

// GET /api/vi/donuts
router.get("/", donutController.getAllDonuts);
router.get("/:id", donutController.getDonut);

// POST /api/vi/donuts
router.post("/", donutController.createDonut);

// PUT /api/vi/donuts
router.put("/:id", donutController.updateDonut);

// DELETE /api/vi/donuts
// router.delete("/:id", donutController.deleteDonut);

module.exports = router;