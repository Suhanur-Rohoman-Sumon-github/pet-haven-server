import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { productValidtion } from './product.validation';
import { productController } from './product.controler';

const router = express.Router();

router.post(
  '/',
  validateRequest(productValidtion.createProductValidation),
  productController.createProduct,
);

router.get('/', productController.getAllProducts);

router.patch(
  '/:productId',
  validateRequest(productValidtion.updateProductValidation),
  productController.updateProduct,
);

router.get('/:productId', productController.getSingleProduct);

router.delete('/:productId', productController.deleteProduct);

export const productRouter = router;
