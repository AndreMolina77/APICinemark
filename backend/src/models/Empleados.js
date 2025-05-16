import { model, Schema } from "mongoose";

const empleadosSchema = new Schema (
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
        puesto:{
            type: String
        },
        fecha_contratacion:{
            type: Date
        },
        salario:{
            type: Number
        },
        DUI:{
            type: String
        }
    }
)

export default model("Empleados", empleadosSchema);