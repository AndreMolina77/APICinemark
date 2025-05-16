import mongoose from "mongoose";
import { config } from "./src/config.js";

// 2- Conexión a la base de datos
mongoose.connect(config.db.URI);

//3- Constante que es igual a la conexión
const connection = mongoose.connection;

//Verificación de que funcione
connection.once("open", () => {
    console.log("DB is connected");
});

//Veo si se desconectó
connection.on("disconnected", () => {
    console.log("DB is disconnected");
});

//Verificacion de error
connection.on("error", (error) => {
    console.log("error found" + error);
});