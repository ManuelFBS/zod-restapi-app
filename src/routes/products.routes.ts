import { Router } from 'express';
import {
  createProduct,
  updateProduct,
} from '../controllers/products.controller';
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import {
  CreateProductSchema,
  UpdateProductSchema,
} from '../libs/schemas/product.schema';

const router: Router = Router();

router.post(
  '/create',
  schemaValidation(CreateProductSchema),
  createProduct,
);

router.put(
  '/update/:id',
  schemaValidation(UpdateProductSchema),
  updateProduct,
);

export default router;
