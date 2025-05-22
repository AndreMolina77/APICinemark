import express from "express";
import peliculasController from "../controllers/peliculasController.js";
import multer from "multer"

const router = express.Router();

const upload = multer({dest: "public/"})


router
.route("/")
.get(peliculasController.getAllPeliculas)
.post(upload.single("image"), peliculasController.insertPelicula)

router
.route("/id")
.put(upload.single("image"), peliculasController.putPeliculas)
.delete(peliculasController.deletePeliculas)

export default router