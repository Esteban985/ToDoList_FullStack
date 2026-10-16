import { pool } from './config/database.js'
import express from 'express'
import { LoginRoute } from './routes/LoginRouter.js';
import { ErrorHandler } from './middlewares/ErrorHandler.js';

const app = express();

app.use(express.json())

app.use('/api/login', LoginRoute)

app.use(ErrorHandler)

try {
    await pool.query('select 1')
    console.log('BD conectada perfectamente')

    app.listen(process.env.PORT, () => {
        console.log('El servidor se esta ejecutando')
    })
} catch (error) {
    console.log('Error al conectar postgresSQL')
    await pool.end()
}