import z from "zod";

const crearNuevaTarea = z.object({
    descripcion: z
        .string('Por favor enviarlo como string')
        .trim()
        .min(1, 'Por favor enviar algo de descripcion'),
    tipo_tarea_id: z
        .int('Por favor enviar el id del tipo de tarea como numero')
})

const actualizarTareaSchema = z.object({
    descripcion: z
        .string('Por favor enviarlo como string')
        .trim()
        .min(1, 'Campo obligatorio para actualizar la tarea'),
    completada: z
        .boolean('Solo se acepta true o false')
})

export { crearNuevaTarea, actualizarTareaSchema }