import app from "./app.js";
import "./database.js"
import { config } from "./src/config.js";

// Función que ejecuta el servidor
async function main() {
    app.listen(config.server.PORT);
    console.log("Server on port "+ config.server.PORT)
}
//Ejecutamos todo
main();