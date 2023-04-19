import { useState } from 'react';

import { NavBarLayout, ProductList } from './components';
import type { ProductListType } from './types';
import items from './data/items.json';
import { sortProducts } from './App.util';

const productItems: ProductListType[] = items;

function App() {
  const [filteredProductList, setFilteredProductList] = useState(items);
  const [searchedProductList, setSearchedProductList] = useState<
    ProductListType[]
  >([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [sortPrice, setSortPrice] = useState('default');

  const filterProductsHandler = (filterType: string, filterValue: string) => {
    if (filterType === 'price') {
      setSortPrice(filterValue);
    }

    if (filterType === 'search') {
      const filteredProducts: ProductListType[] = filteredProductList.filter(
        (item) => {
          const productName = item.productName.toLowerCase();
          const modifiedFilterValue = filterValue.toLowerCase();

          return productName.includes(modifiedFilterValue);
        },
      );

      setSearchProduct(filterValue);
      setSearchedProductList(filteredProducts);
    }

    if (filterType === 'category') {
      const filteredProducts: ProductListType[] = productItems.filter(
        (item) => {
          const productCategory = item.category.toLowerCase();
          return filterValue !== 'all'
            ? productCategory.includes(filterValue)
            : item;
        },
      );

      setSearchProduct('');
      setSearchedProductList([]);
      setFilteredProductList(filteredProducts);
    }
  };

  const isSearchExist = searchedProductList.length > 0 || !!searchProduct;

  const setProductList = isSearchExist
    ? searchedProductList
    : filteredProductList;

  const sortedProducts = sortProducts(setProductList, sortPrice);

  return (
    <>
      <NavBarLayout
        searchProduct={searchProduct}
        setFilterProductsHandler={filterProductsHandler}
      />
      <ProductList
        setFilterProductsHandler={filterProductsHandler}
        items={sortedProducts}
      />
    </>
  );
}

export default App;
