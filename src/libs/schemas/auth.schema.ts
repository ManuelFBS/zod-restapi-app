import { z } from 'zod';

export const LoginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is requiered...',
        invalid_type_error: 'The email must be a string...',
      })
      .email('Must provide a valid email...')
      .max(
        50,
        'The email must be a maximum of 50 characters',
      ),
    password: z
      .string({
        required_error: 'Password is required...',
        invalid_type_error: 'The email must be a string...',
      })
      .min(6, 'Password must be a minimum of 6 characters')
      .max(
        20,
        'Password must be a maximum of 20 characters',
      ),
  }),
});
