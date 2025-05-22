import cookieParser from "cookie-parser";
import express from "express";
import clienteRoutes from "./src/routes/clientes.js";
import empleadoRoutes from "./src/routes/empleados.js";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
import peliculasRoutes from "./src/routes/peliculas.js";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"; 
import registerClienteRoutes from "./src/routes/registerCliente.js";
import registerEmpleadoRoutes from "./src/routes/registerEmpleado.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/clientes", clienteRoutes);
app.use("/api/empleados", empleadoRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/peliculas", peliculasRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);
app.use("/api/registerCliente", registerClienteRoutes);
app.use("/api/registerEmpleado", registerEmpleadoRoutes);

export default app;