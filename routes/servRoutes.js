const express = require("express");
const servControllers = require("../controllers/servControllers");
const { todoSchema, servSchema } = require("../validations/servValidations");
const validate = require("../middlewares/validate");

const router = express.Router();

router.post("/", validate(servSchema), servControllers.create);

router.put("/:id", validate(servSchema), servControllers.update);

module.exports = router;
