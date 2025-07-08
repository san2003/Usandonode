const express = require("express");
const servControllers = require("../controllers/servControllers");

const router = express.Router();

router.post("/", servControllers.create);

router.put("/:id", servControllers.update);

module.exports = router;
