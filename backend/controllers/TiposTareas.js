import { listarTiposTareas } from "../repositories/ListarTiposRepository.js"

const listarTipos = async (req, res) => {
    const result = await listarTiposTareas()

    res.status(200).json({
        message: 'Tipos obtenidos correctamente',
        data: result
    })
}

export { listarTipos }