import express from "express";
import recoveryPasswordController from "../controllers/recoveryPasswordController.js";

const router = express.Router();

router.route("/requestCode").post(recoveryPasswordController.requestCode); // Request password recovery code
router.route("/verifyCode").post(recoveryPasswordController.verifyCode); // Validate password recovery code
router.route("/newPassword").post(recoveryPasswordController.newPassword); // Update password

export default router;