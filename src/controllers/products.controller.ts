import { Request, Response } from 'express';
import {
  CreateProductType,
  UpdateProductBodyType,
  UpdateProductParamsType,
  UpdateProductQueryType,
} from '../libs/schemas/product.schema';

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response,
) => {
  const { name, price } = req.body;
  res.send('Creating a product...');
};

export const updateProduct = (
  req: Request<
    UpdateProductParamsType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response,
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { title } = req.query;

  console.log(id, name, price, title);

  res.send('Update product...!');
};
