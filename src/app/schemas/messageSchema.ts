import {z} from "zod"

export const MessageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "content must be at least 10 characters"})
    .max(300, {message: "We can't accept more than 300 character content"})
    
})