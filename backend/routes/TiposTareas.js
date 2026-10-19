import { Router } from "express";
import { listarTipos } from "../controllers/TiposTareas.js";

const TiposTareasRoute = Router()

TiposTareasRoute.get('/', listarTipos)

export { TiposTareasRoute }