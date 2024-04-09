import { format } from 'date-fns'
import { nb } from 'date-fns/locale'
import { ChatMessage } from '../server/chat-api'

// ...

const Messages = ({ messages }: { messages: ChatMessage[] }) => (
  <div class="flex flex-col gap-2">
    {messages.map((m) => (
      <div class="flex flex-col gap-1">
        <span class="text-sm text-gray-500">
          {format(new Date(m.timestamp), 'PPpp', { locale: nb })}
        </span>
        <span>{m.message}</span>
      </div>
    ))}
  </div>
)

export default Messages
