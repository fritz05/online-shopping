import { useDisclosure } from '@chakra-ui/react';

import { ShoppingCart } from '../ShoppingCart';
import NavBar from './NavBar';

import type {
  CartListType,
  ClearCartHandlerType,
  FilterProductProps,
  ModifyItemQuantityHandlerType,
} from '../../types';

type NavBarLayoutProps = FilterProductProps &
  ModifyItemQuantityHandlerType &
  ClearCartHandlerType;
interface NavBarLayout extends NavBarLayoutProps {
  searchProduct: string;
  cartList: CartListType[];
}

function NavBarLayout({
  setModifyItemQuantityHandler,
  setFilterProductsHandler,
  searchProduct,
  cartList,
  setClearCartHandler,
}: NavBarLayout) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavBar
        setFilterProductsHandler={setFilterProductsHandler}
        onOpen={onOpen}
        searchProduct={searchProduct}
      />
      <ShoppingCart
        cartList={cartList}
        onClose={onClose}
        isOpen={isOpen}
        setModifyItemQuantityHandler={setModifyItemQuantityHandler}
        setClearCartHandler={setClearCartHandler}
      />
    </>
  );
}

export default NavBarLayout;
