import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { TProduct } from './product.interface';
import { productServices } from './product.services';

// Controller to create a new product
const createProduct = catchAsync(async (req, res) => {
  const productInfo = req.body;
  const data = await productServices.createProduct(productInfo);
  sendResponse<TProduct>(res, {
    success: true,
    statusCode: 200,
    message: 'Product created successfully',
    data,
  });
});

// Controller to get all products
const getAllProducts = catchAsync(async (req, res) => {
  const data = await productServices.getAllProducts();
  sendResponse<TProduct[]>(res, {
    success: true,
    statusCode: 200,
    message: 'Products retrieved successfully',
    data,
  });
});

// Controller to get a single product by ID
const getSingleProduct = catchAsync(async (req, res) => {
  const data = await productServices.getSingleProduct(req.params.productId);
  sendResponse<TProduct>(res, {
    success: true,
    statusCode: 200,
    message: 'Product retrieved successfully',
    data,
  });
});

// Controller to update a product by ID
const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const productInfo = req.body as Partial<TProduct>;
  const data = await productServices.updateProduct(productId, productInfo);

  sendResponse<TProduct | null>(res, {
    success: !!data,
    statusCode: data ? 200 : 404,
    message: data ? 'Product updated successfully' : 'Product not found',
    data,
  });
});

// Controller to delete a product by ID
const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const data = await productServices.deleteProduct(productId);

  sendResponse<TProduct | null>(res, {
    success: !!data,
    statusCode: data ? 200 : 404,
    message: data ? 'Product deleted successfully' : 'Product not found',
    data,
  });
});

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
