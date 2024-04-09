import { Hono } from 'hono'

import Messages from './components/Messages'
import { HomePage } from './pages/home'
import { MessageRequest } from './schemas'
import { chatApi } from './server/chat-api'

const app = new Hono()

app.get('/', (c) => {
  return c.html(<HomePage />)
})

app.post('/chat', async (c) => {
  const body = await c.req.parseBody()
  console.log(body)
  const { message } = MessageRequest.parse(body)
  await chatApi.addMessage(message)
  const messages = await chatApi.getMessages()
  return c.html(<Messages messages={messages} />)
})

export default app
