import { z } from 'zod'

const loginSchema = z.object({
    email: z.
        email('Por favor enviar un email correcto')
        .trim()
        .min(1, 'Email obligatorio'),
    password: z
        .string('Por favor enviarlo como string')
        .trim()
        .min(1, 'Campo obligatorio por favor enviarlo')
})

const createUserSchema = z.object({
    nombres: z
        .string('Por favor enviar como string')
        .trim()
        .min(5, 'Por favor enviar nombres como minimo 5 caracteres')
        .max(150, 'El maximo permitido es de 150 caracteres'),
    apellidos: z
        .string('Por favor enviar como string')
        .trim()
        .min(5, 'Por favor enviar apellidos como minimo 5 caracteres')
        .max(150, 'El maximo permitido es de 150 caracteres'),
    email: z
        .email('Por favor enviar un email correcto')
        .trim()
        .min(1, 'Por favor enviar un email valido')
        .max(50, 'El maximo es de 50 caracteres'),
    password: z
        .string('Por favor enviarlo como string')
        .trim()
        .min(5, 'El minimo para la password es de 5 caracteres')
})

export { loginSchema, createUserSchema }