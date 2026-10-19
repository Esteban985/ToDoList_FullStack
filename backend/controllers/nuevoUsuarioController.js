import { nuevousuarioBD } from "../repositories/nuevoUsuarioRepository.js"

const nuevoUsuarioController = async (req, res) => {
    const nuevoUsuario = await nuevousuarioBD(req.body)
    res.status(200).json({
        message: 'Usuario creado correctamente',
        data: nuevoUsuario
    })
}

export { nuevoUsuarioController }