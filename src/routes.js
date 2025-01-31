const express = require("express");
const router = express.Router();

const ContactController = require("./app/contacts/contact.controller");
const CategoryController = require("./app/categories/category.controller");

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);

module.exports = router;
