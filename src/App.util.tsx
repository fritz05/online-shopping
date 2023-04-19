import { ProductListType } from './types';

export const sortProducts = (products: ProductListType[], sortBy: string) => {
  let sortedProducts = [...products];

  if (sortBy === 'default') return sortedProducts;

  if (sortBy === 'lowest') {
    products.sort(
      (firstItem, secondItem) => firstItem.unitPrice - secondItem.unitPrice,
    );
  } else if (sortBy === 'highest') {
    products.sort(
      (firstItem, secondItem) => secondItem.unitPrice - firstItem.unitPrice,
    );
  }

  return sortedProducts;
};
