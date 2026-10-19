import { BuscarUsuario } from "../repositories/LoginRespository.js"
import { AppError } from "../utils/AppError.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const LoginController = async (req, res, next) => {
    try {
        const usuario = await BuscarUsuario(req.body.email)

        if (!usuario) {
            return next(new AppError('Credenciales incorrectas', 401))
        }

        const check = await bcrypt.compare(req.body.password, usuario.password_hash)

        if (!check) {
            return next(new AppError('Contraseña incorrecta', 401))
        }

        const token = jwt.sign(
            { role: 'user', nombre: usuario.nombres},
            process.env.JWT_SECRET,
            { subject: usuario.usuario_id.toString(), expiresIn: '1h', algorithm: 'HS256' }
        )

        res.status(200).json({
            message: 'Credenciales correctas',
            token
        })
    } catch (error) {
        return next(error)
    }
}

export { LoginController }