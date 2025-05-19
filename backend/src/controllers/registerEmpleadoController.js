import modeloEmpleados from "../models/Empleados.js";

import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerEmpleadoController = {};

registerEmpleadoController.register = async (req, res) => {
    const { nombre, correo, contrasenia, telefono, direccion, DUI } = req.body;
    
    try {
        // Verificar si el empleado ya existe
        const existingEmployee = await modeloEmpleados.findOne({ correo });
        if (existingEmployee) {
        return res.json({ message: "Empleado ya existente" });
        }
    
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contrasenia, 10);
    
        // Crear un nuevo empleado
        const newEmployee = new modeloEmpleados({
        nombre,
        correo,
        telefono,   
        direccion,
        puesto,
        fecha_contratacion,
        salario,
        DUI: DUI,
        contrasenia: hashedPassword,
        });
    
        await newEmployee.save();
        
        jsonwebtoken.sign(
            {id: newEmployee._id, userType: "employee"},
            config.JWT.secret,
            { expiresIn: config.JWT.expires },
            (error, token) => {
                if (error) console.log("error" + error);
                res.cookie("authToken", token);
                res.json({ message: "Empleado registrado exitosamente" });
            }
        );

    } catch (error) {
        console.log("error" + error);
        res.json({message: "Error"});
    }
    };

    export default registerEmpleadoController;