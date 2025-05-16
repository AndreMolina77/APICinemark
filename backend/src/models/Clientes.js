import { model, Schema } from "mongoose";

const clientesSchema = new Schema(
    {
        nombre:{
            type: String
        },
        correo:{
            type: String
        },
        contrasenia:{
            type: String
        },
        telefono: {
            type: String
        },
        direccion:{
            type: String
        },
        DUI:{
            type: String
        }
    }
)

export default model ("Clientes", clientesSchema);