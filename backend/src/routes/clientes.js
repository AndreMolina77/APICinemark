import express from "express";
import clientesController from "../controllers/clientesController.js";

const router = express.Router();

router
.route("/")
.get(clientesController.getclientes) // Obtener todos los clientes  
.post(clientesController.createcliente); // Crear un nuevo cliente

router
.route("/:id")
.delete(clientesController.deletecliente) // Eliminar un cliente
.put(clientesController.updatecliente); // Actualizar un cliente

export default router;