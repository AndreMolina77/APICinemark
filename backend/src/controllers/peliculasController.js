import peliculasModel from "../models/Peliculas.js"
import { v2 as cloudinary} from "cloudinary";

import { config } from "../config.js";

//Configuracion de cloudinary
cloudinary.config({
    cloud_name_: config.cloudinary.cloud_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,

});

//Array de funciones vacío
const peliculasController = {};

//SELECT
peliculasController.getAllPeliculas = async (req, res) => {
    const pelicula = await peliculasController.find();
    res.json(pelicula);
};

//INSERT
peliculasController.insertPelicula = async (req, res) => {
    const { titulo, descripcion, director, genero, anio, duracion} = req.body;
    let imageURL = "";

//Subir img a Cloudinary
if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg", "gif"],
    });
    imageURL = result.secure_url
}
//Uardar el registoe en la base de datos
const newPelicula = new peliculasModel({titulo, descripcion, director, genero, anio, duracion, imagen:imageURL });
newPelicula.save();

res.json({message: "Pelicula guardada"});
}

//UPDATE
peliculasController.putPeliculas = async (req, res) => {
    const {titulo, descripcion, director, genero, anio, duracion} = req.body;
    let imagenURL = "";

    //Subir la iamgen a Cloudinary
    if(req.file){
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "public",
            allowed_formats: ["jpg", "png", "jpeg", "gif"]
        });
        imagenURL = result.secure_url;
    }
    //Actualizar el registro en la base de datos
    await peliculasController.findByIdAndUpdate(req.params.id,
        {titulo, descripcion, director, genero, anio, duracion, imagen: imagenURL}, {new: true}
    );
    res.json({message: "Pelicula guardada"})
}


//DELETE
peliculasController.deletePeliculas = async (req, res) => {
    const deletedPeliculas = await peliculasModel.findByIdAndDelete(req.params.id);
    if(!deletePeliculas){
        return res.status(404).json({message: "Pelicula no encontrada"});
    }
    res.json({message: "Pelicula eliminada"})
}

export default peliculasController;