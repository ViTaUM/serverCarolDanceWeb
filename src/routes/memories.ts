import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/primas'

export async function memoriesRouts(app: FastifyInstance) {
  app.get('/eventos', async () => {
    const eventos = await prisma.evento.findMany()

    return eventos
  })

  app.get('/assentos', async () => {
    const assentos = await prisma.assentos.findMany()

    return assentos
  })

  app.get('/assentosReservados', async () => {
    const assentosReservados = await prisma.assentos_reservas.findMany()

    return assentosReservados
  })
}
