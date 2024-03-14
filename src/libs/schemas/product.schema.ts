import { ZodBigInt, z } from 'zod';

export const CreateProductSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name of product is required...',
      })
      .min(
        3,
        'Product name must be at least 3 characters...',
      )
      .max(
        50,
        'Product name must be a maximum of 50 characters',
      ),
    price: z
      .number({
        required_error: 'Price is required...',
        invalid_type_error: 'Price must be a number...',
      })
      .refine(
        (value) => value !== null,
        'Price can not be null...',
      )
      .refine(
        (value) => value > 0,
        'Price must be greater than 0...',
      )
      .refine(
        (value) => parseFloat(value.toFixed(2)) === value,
        'Price must have a maximun of 2 decimals...',
      ),
  }),
});

export const UpdateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z
      .number({
        required_error: 'Price is required...',
        invalid_type_error: 'Price must be a number...',
      })
      .refine(
        (value) => value !== null,
        'Price can not be null...',
      )
      .refine(
        (value) => value > 0,
        'Price must be greater than 0...',
      )
      .refine(
        (value) => parseFloat(value.toFixed(2)) === value,
        'Price must have a maximun of 2 decimals...',
      )
      .optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
  query: z.object({
    title: z.string().min(5),
  }),
});

export type CreateProductType = z.infer<
  typeof CreateProductSchema
>['body'];

export type UpdateProductBodyType = z.infer<
  typeof UpdateProductSchema
>['body'];
export type UpdateProductParamsType = z.infer<
  typeof UpdateProductSchema
>['params'];
export type UpdateProductQueryType = z.infer<
  typeof UpdateProductSchema
>['query'];
