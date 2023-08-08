// Autor: Steven Araya Gonzalez
const SchemaUser = require("../models/user");
require("dotenv").config();

exports.UpdateParamsUser = async (req, res) => {
    try {
        const {_id, name, lastname, identification, email, image, country, dateOfBirth, hashedPassword} = req.body;

        // Crea un objeto con solo los campos no vacíos o no nulos
        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (lastname) updatedFields.lastname = lastname;
        if (identification) updatedFields.identification = identification;
        if (email) updatedFields.email = email;
        if (image) updatedFields.image = image;
        if (country) updatedFields.country = country;
        if (dateOfBirth) updatedFields.dateOfBirth = dateOfBirth;
        if (hashedPassword) updatedFields.hashedPassword = hashedPassword;

        // Ejecuta la consulta con el objeto actualizado
        const user = await SchemaUser.findOneAndUpdate({_id: _id}, updatedFields, {new: true});

        if (!user) {
            return res.status(404).json({message: "No se encontró el usuario"});
        }

        return res.status(200).json({message: "Usuario actualizado correctamente"});
    } catch (e) {
        return res.status(500).json({message: "Error al actualizar el usuario"});
    }
};


exports.GetUserById = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await SchemaUser.findById(id);

        if (!user) {
            return res.status(404).json({message: "No se encontró el usuario"});
        }

        return res.status(200).json(user);
    } catch (e) {
        return res.status(500).json({message: "Error al obtener el usuario"});
    }
}