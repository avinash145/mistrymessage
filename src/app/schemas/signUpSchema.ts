import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(2, 'Username must be atleast 2 characters')
  .max(20, 'Username not carry more than 20 characters');

export const signUpSchema = z.object({
  usename: usernameValidation,
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});
