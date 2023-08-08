// Autor: Andy Guzmán Ramírez
const SchemaContact = require("../models/contact");
const SchemaUser = require("../models/user");
require("dotenv").config();


exports.AddContact = async (req, res) => {
    try {
        const {idUser, name, lastname, identification, phone, direction, relationship} = req.body;

        if (!(name && lastname && identification && phone && direction && relationship)) {
            res.status(400).send("All input is required");
        }

        const contact =  await SchemaContact.create({
            name,
            lastname,
            identification,
            phone,
            direction,
            relationship
        });

        await SchemaUser.updateOne({
            _id:idUser
        },  
        {
            $push: 
            {idContact:contact._id}
        });

        return res.status(200).json({message: "Contacto agregado correctamente"});
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
};


exports.UpdateParamsContact = async (req, res) => {
    try {
        const {_id, name, lastname, identification, phone, direction, relationship} = req.body;

        // Crea un objeto con solo los campos no vacíos o no nulos
        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (lastname) updatedFields.lastname = lastname;
        if (identification) updatedFields.identification = identification;
        if (phone) updatedFields.phone = phone;
        if (direction) updatedFields.direction = direction;
        if (relationship) updatedFields.relationship = relationship;

        // Ejecuta la consulta con el objeto actualizado
        const contact = await SchemaContact.findOneAndUpdate({_id: _id}, updatedFields, {new: true});

        if (!contact) {
            return res.status(404).json({message: "No se encontró el contacto"});
        }

        return res.status(200).json({message: "Usuario actualizado correctamente"});
    } catch (e) {
        return res.status(500).json({message: "Error al actualizar el usuario"});
    }
};