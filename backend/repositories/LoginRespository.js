import { pool } from "../config/database.js"

const BuscarUsuario = async (email) => {
    const usuario = await pool.query('select * from usuarios where email = $1', [email])

    return usuario.rows[0] || null
}

export { BuscarUsuario }