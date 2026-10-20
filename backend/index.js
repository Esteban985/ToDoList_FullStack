import { pool } from './config/database.js'
import express from 'express'
import { LoginRoute } from './routes/LoginRouter.js';
import { ErrorHandler } from './middlewares/ErrorHandler.js';
import { jwtVerificador } from './middlewares/jwtVerificador.js';
import { TaskRoute } from './routes/TasksRouter.js';
import { TiposTareasRoute } from './routes/TiposTareas.js';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/user', LoginRoute)

//verificador del token
app.use(jwtVerificador)

//rutas para las tareas 
app.use('/api/tasks', TaskRoute)

//ruta para listar los tipo de tareas
app.use('/api/tipos-tareas', TiposTareasRoute)

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