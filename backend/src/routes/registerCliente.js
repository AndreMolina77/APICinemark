import express from "express";
import registerClienteController from "../controllers/registerClienteController.js";

const router = express.Router();

router.route("/").post(registerClienteController.register); // Register route
router.route("/verifyCodeEmail").post(registerClienteController.verifyCodeEmail); // Validate route

export default router;