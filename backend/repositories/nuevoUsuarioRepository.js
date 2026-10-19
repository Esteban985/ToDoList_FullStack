import { pool } from "../config/database.js"
import bcrypt from 'bcrypt'
import { AppError } from "../utils/AppError.js"

const nuevousuarioBD = async ({ nombres, apellidos, email, password }) => {
    try {
        const pass = await bcrypt.hash(password, 10)

        const nuevoUsuario = await pool.query(
            'insert into usuarios (nombres, apellidos, email, password_hash) values ($1,$2,$3,$4) returning *',
            [nombres, apellidos, email, pass]
        )

        return nuevoUsuario.rows[0]
    } catch (error) {
        if (error.code === '23505') {
            throw new AppError('Email ingresado existente, por favor cambialo', 409)
        } else {
            throw new AppError(error.message, 400)
        }
    }
}

export { nuevousuarioBD }