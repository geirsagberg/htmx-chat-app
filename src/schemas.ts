import { z } from 'zod'

export const MessageRequest = z.object({
  message: z.string(),
})
export type MessageRequest = z.infer<typeof MessageRequest>
