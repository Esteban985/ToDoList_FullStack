import { pool } from "../config/database.js"
import { AppError } from "../utils/AppError.js"

const traerTareas = async (id) => {
    const tareas = await pool.query('select * from tareas where usuario_id = $1', [id])

    return tareas.rows[0] || []
}

const nuevaTareaBD = async (descripcion, usuario_id, tipo_tarea_id) => {
    try {
        const nuevaTarea = await pool.query(
            'insert into tareas (descripcion, usuario_id, tipo_tarea_id) values ($1,$2,$3) returning *', [descripcion, usuario_id, tipo_tarea_id]
        )
        return nuevaTarea.rows[0]
    } catch (error) {
        throw new AppError(error.message, 500);
    }
}

const updateTareaBD = async (descripcion, completada, id, tarea_id) => {
    try {
        const actualizado = await pool.query(
            'update tareas set descripcion = $1, completada = $2 where usuario_id = $3 and tarea_id = $4 returning tarea_id', [descripcion, completada, id, tarea_id]
        )

        return actualizado.rows[0]
    } catch (error) {
        throw new AppError("Error al intentar actualizar la tarea", 500);
    }
}

const eliminarTarea = async (usuario_id, tarea_id) => {
    try {
        const eliminada = await pool.query('delete from tareas where tarea_id = $1 and usuario_id = $2 returning *', [tarea_id, usuario_id])

        return eliminada.rows[0]
    } catch (error) {
        throw new AppError("Error al intentar eliminar la tarea", 500);
    }
}

const treaerTareaID = async (usuario_id, tarea_id) => {
    try {
        const result = await pool.query('select * from tareas where usuario_id = $1 and tarea_id = $2', [usuario_id, tarea_id])

        return result.rows[0]
    } catch (error) {
        throw new AppError("Error al traer la tarea", 500);
    }
}

export { traerTareas, nuevaTareaBD, updateTareaBD, eliminarTarea, treaerTareaID }