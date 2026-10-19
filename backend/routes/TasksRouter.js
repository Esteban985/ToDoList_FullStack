import { Router } from "express";
import { actualizarTarea, eliminaTarea, getTareaID, getTareas, nuevaTarea } from "../controllers/TareasController.js";
import { validateMiddleware } from "../middlewares/validateMiddleware.js";
import { actualizarTareaSchema, crearNuevaTarea } from "../schemas/tareasSchemas.js";

const TaskRoute = Router()

TaskRoute.get('/', getTareas)
TaskRoute.post('/', validateMiddleware(crearNuevaTarea), nuevaTarea)
TaskRoute.patch('/:id', validateMiddleware(actualizarTareaSchema), actualizarTarea)
TaskRoute.delete('/:id', eliminaTarea)
TaskRoute.get('/:id', getTareaID)

export { TaskRoute }