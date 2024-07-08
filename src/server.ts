import Fastify from 'fastify'

const app = Fastify({
  logger: true,
})

app.get('/', async (_, res) => {
  return res.status(200).type('text/html').send("<p>Hello world!</p>")
})

export default async function handler(req: any, res: any) {
  await app.ready()
  app.server.emit('request', req, res)
}
    
