import jwt from 'jsonwebtoken'

const jwtVerificador = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    const verificado = jwt.verify(token, process.env.JWT_SECRET)

    if (verificado) {
        req.usuarioID = verificado.sub

        next()
    }
}

export { jwtVerificador }