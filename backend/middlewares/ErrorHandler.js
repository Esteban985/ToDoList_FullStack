const ErrorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500
    const messsage = error.message || 'Error interno del servidor'

    res.status(statusCode).json({
        status: 'error',
        message: messsage
    })

    next()
}

export { ErrorHandler }