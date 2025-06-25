import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies'
import { corsMiddleware } from './middlewares/cors'


const app = express()
app.use(json())
app.use(corsMiddleware()) // habilitar CORS
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

app.use('/movies', moviesRouter) 

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})