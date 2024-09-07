import express from "express";
import { sendMailController } from "../Controllers/serviceController.js";
const router = express.Router();

//~ Send Mail
router.post("/send-mail", sendMailController);

export default router;
