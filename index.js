/* Exportar librerias necesarias. */
const express = require("express");
require("dotenv").config();
const cors = require("cors");

//Conexcion de moongoose
const {Database} = require("./db/mongoose");

/* Importar rutas necesarias */
const Auth = require("./routes/Autentication");
const User = require("./routes/User");

/* Instacia de la aplicacion. */
const app = express();

/* Establecer conexión a la base de datos MongoDB*/
Database();

/* Habilitar CORS con las opciones configuradas */
app.use(cors());

/* recibe y envia datos json */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*Habilitar rutas necesarias*/
app.use("/Auth", Auth());
app.use("/User", User());

// Se inicia el servidor
app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});
