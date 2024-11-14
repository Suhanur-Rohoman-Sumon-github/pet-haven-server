import { z } from 'zod';

const createProductValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    category: z.string().min(1, 'Category is required'),
    price: z.number().positive('Price must be a positive number'),
    image: z.string().url('Image must be a valid URL'),
    isDeleted: z.boolean().default(false),
    details: z.string().min(1, 'Details are required'),
    stock: z.number().int().nonnegative('Stock must be a non-negative integer'),
    rating: z
      .number()
      .min(0, 'Rating must be between 0 and 5')
      .max(5, 'Rating must be between 0 and 5'),
  }),
});

const updateProductValidation = z.object({
  body: z
    .object({
      name: z.string().min(1, 'Name is required').optional(),
      category: z.string().min(1, 'Category is required').optional(),
      price: z.number().positive('Price must be a positive number').optional(),
      image: z.string().url('Image must be a valid URL').optional(),
      isDeleted: z.boolean().optional(),
      details: z.string().min(1, 'Details are required').optional(),
      stock: z
        .number()
        .int()
        .nonnegative('Stock must be a non-negative integer')
        .optional(),
      rating: z
        .number()
        .min(0, 'Rating must be between 0 and 5')
        .max(5, 'Rating must be between 0 and 5')
        .optional(),
    })
    .partial(),
});

export const productValidtion = {
  createProductValidation,
  updateProductValidation,
};
