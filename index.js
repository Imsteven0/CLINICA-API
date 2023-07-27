/* Exportar librerias necesarias. */
const express = require("express");
require("dotenv").config();
const cors = require("cors");

/* Instacia de la aplicacion. */
const app = express();

// Habilitar CORS con las opciones configuradas
app.use(cors());

//recibe y envia datos json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Se inicia el servidor
app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});
