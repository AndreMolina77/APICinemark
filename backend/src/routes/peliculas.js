import express from "express";
import peliculasController from "../controllers/peliculasController";

const router = express.Router();

router
.route("/")
.get(peliculasController.getAllPeliculas)
.post(peliculasController.insertPelicula)

router
.route("/id")
.put(peliculasController.putPeliculas)
.delete(peliculasController.deletePeliculas)

export default router