const express = require("express");
const router = express.Router();

const ContactController = require("./app/contacts/contact.controller");

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);

module.exports = router;
