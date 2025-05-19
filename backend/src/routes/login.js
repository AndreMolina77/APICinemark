import express from "express";
import controladorLogin from "../controllers/loginController";

const router = express.Router();

router.route("/").post(controladorLogin.login); // Login route

export default router;