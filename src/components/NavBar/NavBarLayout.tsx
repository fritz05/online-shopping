import { useDisclosure } from '@chakra-ui/react';

import { ShoppingCart } from '../ShoppingCart';
import NavBar from './NavBar';

import { FilterProductProps } from '../../types';

interface NavBarLayout extends FilterProductProps {
  searchProduct: string;
}

function NavBarLayout({
  setFilterProductsHandler,
  searchProduct,
}: NavBarLayout) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavBar
        setFilterProductsHandler={setFilterProductsHandler}
        onOpen={onOpen}
        searchProduct={searchProduct}
      />
      <ShoppingCart onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default NavBarLayout;
