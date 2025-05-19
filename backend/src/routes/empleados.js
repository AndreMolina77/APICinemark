import express from "express";
import empleadosController from "../controllers/empleadosController.js";

const router = express.Router();

router
.route("/")
.get(empleadosController.getEmpleados) // Obtener todos los empleados
.post(empleadosController.createEmpleado); // Crear un nuevo empleado

router
.route("/:id")
.delete(empleadosController.deleteEmpleado) // Eliminar un empleado
.put(empleadosController.updateEmpleado); // Actualizar un empleado

export default router;