import { useState } from 'react';

import { NavBarLayout, ProductList } from './components';
import type { CartListType, ProductListType } from './types';
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

  // Handle Shopping Cart
  const [cartList, setCartList] = useState<CartListType[]>([]);

  const addCartListHandler = (productId: string) => {
    setCartList((prevData) => {
      let cartList = [];
      const checkDuplicate = prevData.find((item) => {
        return item.id === productId;
      });

      if (!!checkDuplicate) {
        cartList = prevData.map((items) => {
          if (items.id === productId) {
            return { id: items.id, quantity: items.quantity + 1 };
          }

          return items;
        });
      } else {
        const addedToCart = {
          id: productId,
          quantity: 1,
        };
        cartList = [...prevData, addedToCart];
      }

      return cartList;
    });
  };

  const modifyItemQuantityHandler = (
    productId: string,
    modifiedQuantity: number,
  ) => {
    setCartList((prevData) =>
      modifiedQuantity === 0
        ? prevData.filter((item) => item.id !== productId)
        : prevData.map((item) =>
            item.id === productId
              ? { id: item.id, quantity: modifiedQuantity }
              : item,
          ),
    );
  };

  const clearCartHandler = () => {
    setCartList([]);
  };

  return (
    <>
      <NavBarLayout
        cartList={cartList}
        searchProduct={searchProduct}
        setFilterProductsHandler={filterProductsHandler}
        setModifyItemQuantityHandler={modifyItemQuantityHandler}
        setClearCartHandler={clearCartHandler}
      />
      <ProductList
        setFilterProductsHandler={filterProductsHandler}
        items={sortedProducts}
        addCartListHandler={addCartListHandler}
      />
    </>
  );
}

export default App;
