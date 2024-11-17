import express, { json } from 'express';
import cors from 'cors';
import { routerUsuarios } from './routes/routesUsuarios.js'
import { routerCitas } from './routes/routesCitas.js'
import { routerRepresentante } from './routes/routesRepresentante.js'

const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:3333',
    'http://localhost:3000'
]

const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin)) {
            return callback(null, true)
        }
        if (!origin) {
            return callback(null, true)
        }
        return callback(new Error('Not allowed by CORS'))
    }
})

const app = express();
app.use(json())
app.use(corsMiddleware())
app.use('/usuarios', routerUsuarios());
app.use('/citas', routerCitas());
app.use('/representantes', routerRepresentante());
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`server listening on ${PORT}`));