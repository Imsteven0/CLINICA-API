const express = require("express");
const router = express.Router();
const controllerUser = require("../controller/ControllerUser");

module.exports = function () {

    router.post("/UpdateUser", controllerUser.UpdateParamsUser);

    router.get("/GetUserById/:id", controllerUser.GetUserById);

    return router;
};