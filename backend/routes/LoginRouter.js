import { Router } from "express";
import { LoginController } from "../controllers/LoginController.js";

const LoginRoute = Router();

LoginRoute.post('/', LoginController)

export { LoginRoute }