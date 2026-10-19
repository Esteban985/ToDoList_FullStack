import { Router } from "express";
import { LoginController } from "../controllers/LoginController.js";
import { nuevoUsuarioController } from "../controllers/nuevoUsuarioController.js";
import { validateMiddleware } from "../middlewares/validateMiddleware.js";
import { createUserSchema, loginSchema } from "../schemas/usersSchemas.js";

const LoginRoute = Router();

LoginRoute.post('/login', validateMiddleware(loginSchema), LoginController)
LoginRoute.post('/createUser', validateMiddleware(createUserSchema), nuevoUsuarioController)

export { LoginRoute }