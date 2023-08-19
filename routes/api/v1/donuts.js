const express = require("express");
const router = express.Router();
const donutController = require("../../../controllers/api/v1/donuts");

// GET /api/vi/users

router.get("/",donutController.getAllDonuts);
router.get("/:id",donutController.getDonut);


// POST /api/vi/users

router.post("/", donutController.createDonut);

// PUT /api/vi/users

router.post("/", donutController.updateAnouncement);


// DELETE /api/vi/users

router.delete("/:id", anouncementController.deleteAnouncement);

module.exports = router;