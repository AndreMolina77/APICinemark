import empleadoModel from "../models/Empleados.js";

const empleadosController = {}; 

//select 
empleadosController.getEmpleados = async (req, res) => {
    const empleados = await empleadoModel.find();
    res.json(empleados);
}

//insert
empleadosController.createEmpleado = async (req, res) => {
    const { nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, DUI } = req.body;
    const newEmpleado = new empleadoModel({
        nombre,
        correo,
        contrasenia,
        telefono,
        direccion,
        puesto,
        fecha_contratacion,
        salario,
        DUI
    });
    await newEmpleado.save();
    res.json({ message: "Empleado creado" });
}

//delete
empleadosController.deleteEmpleado = async (req, res) => {
    const deleteEmpleado = await empleadoModel.findByIdAndDelete(req.params.id);
    if (!deleteEmpleado) {
        return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.json({ message: "Empleado eliminado" });
}

//update
empleadosController.updateEmpleado = async (req, res) => {
    const { nombre, correo, contrasenia, telefono, direccion, puesto, fecha_contratacion, salario, DUI } = req.body;

    await empleadoModel.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            correo,
            contrasenia,
            telefono,
            direccion,
            puesto,
            fecha_contratacion,
            salario,
            DUI
        }, {new: true} // Devuelve el nuevo empleado
    );
    res.json({ message: "Empleado actualizado" });

};  
export default empleadosController;