import clientesModel from "../models/Clientes.js";
const clientesController = {};
//Select 
clientesController.getclientes = async (req, res) => {
    const clientes = await clientesModel.find();
    res.json(clientes);
};

//Insert
clientesController.createcliente = async (req, res) => {
    const { nombre, correo, contrasenia, telefono, direccion, DUI } = req.body;
    const newcliente = new clientesModel({
        nombre,
        correo,
        contrasenia,
        telefono,
        direccion,
        DUI
    });
    await newcliente.save();
    res.json({ message: "Cliente creado" });
};  

//delete

clientesController.deletecliente = async (req, res) => {
    const deletecliente = await clientesModel.findByIdAndDelete(req.params.id);
    if (!deletecliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json({ message: "Cliente eliminado" });
};

//update
clientesController.updatecliente = async (req, res) => {
    const { nombre, correo, contrasenia, telefono, direccion, DUI } = req.body;

    await clientesModel.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            correo,
            contrasenia,
            telefono,
            direccion,
            DUI
        }, {new: true} // Devuelve el nuevo cliente
    );
    res.json({ message: "Cliente actualizado" });

};

export default clientesController;


