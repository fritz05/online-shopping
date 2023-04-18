import { NavBar, ProductList, ShoppingCart } from './components';
import type { ProductListType } from './types';

import items from './data/items.json';
import { Button, useDisclosure } from '@chakra-ui/react';

function App() {
  const productItems: ProductListType[] = items;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavBar onOpen={onOpen} />
      <ShoppingCart onClose={onClose} isOpen={isOpen} />
      <ProductList items={productItems} />
    </>
  );
}

export default App;
