import { pool } from "../config/database.js"
import { AppError } from "../utils/AppError.js";

const listarTiposTareas = async () => {
    try {
        const result = await pool.query('select * from tipos_tareas')

        return result.rows
    } catch (error) {
        throw new AppError("Error al intentar listar los tipos de tareas", 500);
    }
}

export { listarTiposTareas }