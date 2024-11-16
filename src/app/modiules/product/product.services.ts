import AppError from '../../error/AppEroor';
import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create a new product
const createProduct = async (productInfo: TProduct) => {
  const result = await Product.create(productInfo);
  return result;
};

// Get all products
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

// Get a single product by ID
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  if (!result) {
    throw new AppError(404, 'Product not found');
  }
  return result;
};

// Update a product by ID
const updateProduct = async (id: string, productInfo: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, productInfo, {
    new: true,
  });

  return result;
};

// Delete a product by ID
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(404, 'Product not found');
  }
  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
