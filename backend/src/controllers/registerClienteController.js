import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jswonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

import modeloClientes from "../models/Clientes.js";
import modeloEmpleados from "../models/Empleados.js";
import { config } from "../config.js";

const registerClienteController = {};

registerClienteController.register = async (req, res) => {
  const { nombre,
    correo,
    contrasenia,
    telefono,
    direccion,
    DUI } = req.body;

  try { 
    // Verificar si el cliente ya existe
    const existingClient = await modeloClientes.findOne({ email });
    if (existingClient) {
      return res.json({ message: "Cliente ya existente" });
    }

    const hashedPassword = await bcryptjs.hash(contrasenia, 10);
    const newClient = new modeloClientes({
        nombre,
        correo,
        telefono,
        direccion,
        DUI: DUI || null ,
      contrasenia: hashedPassword,
    });

    await newClient.save();

    const verificationCode = crypto.randomBytes(3).toString('hex');
    const token = jswonwebtoken.sign(
        //1- ¿que voy a guardar?
      { correo, verificationCode },
        //2- secreto
      config.JWT.secret,
        //3- ¿cuando expira?
      { expiresIn: '1h' }
    );

    res.cookie('verificationToken', token, { maxAge: 2 * 60 * 1000 });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.emailUser.user_email,
        pass: config.emailUser.user_pass,
      },
    });

    const mailOptions = {
      from: config.emailUser.user_email,
      to: email,
      subject: 'Código de verificación',
      text: "Tu código de verificación es:" + verificationCode + " expira en 2 horas",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log("error" + error);
        res.json({message: "Correo enviado con éxito"});
        });
        res.json({ message: "Cliente registrado con éxito, verifica tu correo" });
    }catch (error) {
        console.log("error" + error);
    res.json({ message: "Error" + error });
    };
};

registerClienteController.verifyCodeEmail = async (req, res) => {
    const {verificationCodeRequest} = req.body;

    const token = req.cookies.verificationToken;

    const decoded = jswonwebtoken.verify(token, config.JWT.secret);
    const { correo, verificationCode: storedCode } = decoded;

    if (verificationCodeRequest !== storedCode) {
        return res.json({ message: "Código inválido" });
    }

    const cliente = await modeloClientes.findOne({ correo });
    await cliente.save();

    res.clearCookie("verificationToken");
    res.json({ message: "Código verificado con éxito" });
};

export default registerClienteController;

