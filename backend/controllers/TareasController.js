import { eliminarTarea, nuevaTareaBD, traerTareas, treaerTareaID, updateTareaBD } from "../repositories/TareasRepository.js"

const getTareas = async (req, res) => {
    const tareas = await traerTareas(req.usuarioID)

    res.status(200).json({
        message: 'Tareas obtenidas perfectamente',
        data: tareas
    })
}

const nuevaTarea = async (req, res) => {
    const { descripcion, tipo_tarea_id } = req.body
    const tareaNueva = await nuevaTareaBD(descripcion, req.usuarioID, tipo_tarea_id)

    res.status(201).json({
        message: 'Tarea creada correctamente',
        data: tareaNueva
    })
}

const actualizarTarea = async (req, res) => {
    const { descripcion, completada } = req.body
    const actualizada = await updateTareaBD(descripcion, completada, req.usuarioID, req.params.id)

    res.status(200).json({
        message: 'Tarea actualizada correctamente',
        data: actualizada
    })
}

const eliminaTarea = async (req, res) => {
    const eliminada = await eliminarTarea(req.usuarioID, req.params.id)

    res.status(200).json({
        message: 'Tarea eliminada correctamente',
        data: eliminada
    })
}

const getTareaID = async (req, res) => {
    const result = await treaerTareaID(req.usuarioID, req.params.id)

    res.status(200).json({
        message: 'Tarea obtenida correctamente',
        data: result
    })
}

export { getTareas, nuevaTarea, actualizarTarea, eliminaTarea, getTareaID }