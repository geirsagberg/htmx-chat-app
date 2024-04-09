import Messages from '../components/Messages'
import { RootLayout } from '../layouts/root'
import { chatApi } from '../server/chat-api'

export async function HomePage() {
  const messages = await chatApi.getMessages()

  return (
    <RootLayout>
      <div class="w-full h-full flex flex-col items-center justify-center gap-4">
        <div>
          <h1 class="text-4xl font-bold">Welcome to My App</h1>
        </div>
        <input
          required
          minlength={1}
          name="message"
          hx-post="/chat"
          hx-target="#chat"
          {...{
            'hx-on::after-request': 'this.value = ""',
          }}
          type="text"
          class="px-4 py-2 border border-gray-300 rounded"
        />
        <div id="chat">
          <Messages messages={messages} />
        </div>
      </div>
    </RootLayout>
  )
}
