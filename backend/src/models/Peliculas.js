import { model, Schema } from "mongoose";

const peliculasSchema = new Schema(
    {
        titulo:{
            type: String
        },
        descripcion:{
            type: String
        },
        director:{
            type: String
        },
        genero:{
            type: Array
        },
        anio:{
            type: Number
        },
        duracion:{
            type: Number
        },
        imagen:{
            type: String
        }
    },
    {
        timestamps: true,
        strict: false,
    }
);

export default model("Peliculas", peliculasSchema);
    