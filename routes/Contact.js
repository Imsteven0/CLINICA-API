const express = require("express");
const router = express.Router();
const controllerContact = require("../controller/ControllerContact");

module.exports = function () {

    router.post("/AddContact", controllerContact.AddContact);

    //router.get("/GetUserById/:id", controllerUser.GetUserById);

    return router;
};