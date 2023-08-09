const express = require("express");
const router = express.Router();
const controllerContact = require("../controller/ControllerContact");

module.exports = function () {

    router.post("/AddContact", controllerContact.AddContact);

    router.get("/GetContactById/:id", controllerContact.GetContactById);

    router.get("/deleteContactById/:id", controllerContact.deleteContactById);

    return router;
};