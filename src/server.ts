import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRouts } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRouts)

// HTTP metodos: GET, POST, PUT, DELETE

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
