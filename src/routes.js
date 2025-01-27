const express = require("express");
const router = express.Router();

const ContactController = require("./app/contacts/contact.controller");

router.get("/contacts", ContactController.index);

module.exports = router;
