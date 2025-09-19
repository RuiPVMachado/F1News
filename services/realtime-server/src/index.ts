import { WebSocketServer } from 'ws'

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000

const wss = new WebSocketServer({ port: PORT })

wss.on('connection', (ws) => {
  ws.send(JSON.stringify({ type: 'hello', message: 'Welcome to the realtime server' }))

  ws.on('message', (data) => {
    // Echo to all clients
    for (const client of wss.clients) {
      if (client.readyState === ws.OPEN) {
        client.send(data)
      }
    }
  })
})

wss.on('listening', () => {
  // eslint-disable-next-line no-console
  console.log(`Realtime WebSocket server listening on ws://localhost:${PORT}`)
})
