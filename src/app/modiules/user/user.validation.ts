import { z } from 'zod';

const createUserValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    image: z.string().url().optional(),
    address: z.string().min(1, 'Address is required'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    role: z.enum(['user', 'admin', 'moderator']).default('user'),
    isDeleted: z.boolean().default(false),
    status: z.enum(['active', 'inactive', 'banned']).default('active'),
  }),
});

const updateUserValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    image: z.string().url().optional(),
    address: z.string().min(1, 'Address is required').optional(),
    phone: z.string().min(1, 'Phone number is required').optional(),
    email: z.string().email('Invalid email address').optional(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .optional(),
    role: z.enum(['user', 'admin']).optional(),
    isDeleted: z.boolean().optional(),
    status: z.enum(['active', 'blocked']).optional(),
  }),
});

export const userValidations = { createUserValidation, updateUserValidation };
