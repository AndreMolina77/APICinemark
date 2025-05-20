import cookieParser from "cookie-parser";
import express from "express";
import clienteRoutes from "./routes/clientes.js";
import empleadoRoutes from "./routes/empleados.js";
import loginRoutes from "./routes/login.js";
import logoutRoutes from "./routes/logout.js";
import peliculasRoutes from "./routes/peliculas.js";
import recoveryPasswordRoutes from "./routes/recoveryPassword.js"; 
import registerClienteRoutes from "./routes/registerCliente.js";
import registerEmpleadoRoutes from "./routes/registerEmpleado.js";

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