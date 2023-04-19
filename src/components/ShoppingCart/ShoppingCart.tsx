import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Box,
  Center,
  Text,
  Button,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import type {
  CartListType,
  ClearCartHandlerType,
  ModifyItemQuantityHandlerType,
  OnCloseProps,
  ProductListType,
  ShoppingCartItemType,
} from '../../types';
import ShoppingCartItem from './ShoppingCartItem';

import items from '../../data/items.json';

const productItems: ProductListType[] = items;

type ShoppingCartPropType = OnCloseProps &
  ModifyItemQuantityHandlerType &
  ClearCartHandlerType;
interface ShoppingCartProp extends ShoppingCartPropType {
  cartList: CartListType[];
}

function ShoppingCart({
  onClose,
  isOpen,
  cartList,
  setModifyItemQuantityHandler,
  setClearCartHandler,
}: ShoppingCartProp) {
  const cartItemDetails: Partial<ShoppingCartItemType>[] = cartList?.map(
    (cartItem) => {
      const filteredItem: ProductListType | undefined = productItems.find(
        (productItem) => {
          return productItem.id === cartItem.id;
        },
      );

      if (filteredItem) {
        return {
          ...filteredItem,
          quantity: cartItem.quantity,
          totalPrice: Number(
            (cartItem.quantity * filteredItem.unitPrice).toPrecision(10),
          ),
        };
      }
      return {};
    },
  );

  const totalCartPrice = cartItemDetails.reduce((acc, item) => {
    return Number((acc + (item.totalPrice ?? 0)).toPrecision(15));
  }, 0);

  const totalCartQuantity = cartItemDetails.reduce((acc, item) => {
    return acc + (item.quantity ?? 0);
  }, 0);

  const clearCartHandler = () => {
    const confirmDialogue = withReactContent(Swal);

    confirmDialogue
      .fire({
        html: <strong>Are you sure you want to clear your cart?</strong>,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        confirmButtonColor: '#142B6F',
      })
      .then((result) => {
        if (result.isConfirmed) {
          setClearCartHandler();
        }
      });
  };

  const checkoutHandler = () => {
    const swalDialogue = withReactContent(Swal);

    swalDialogue
      .fire({
        title: <strong>Confirm checkout?</strong>,
        html: <h6>All items in your cart will be processed</h6>,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        confirmButtonColor: '#142B6F',
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalDialogue.fire({
            title: <strong>Order Confirmed!</strong>,
            html: <h5>Thank you for purchasing.</h5>,
            icon: 'success',
            showConfirmButton: false,
            timer: 3000,
          });

          setClearCartHandler();
        }
      });
  };

  return (
    <>
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size="xl"
        closeOnEsc
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader h="200px">Shopping Cart</DrawerHeader>
          <DrawerBody>
            <ShoppingCartItem
              cartItemDetails={cartItemDetails as ShoppingCartItemType[]}
              setModifyItemQuantityHandler={setModifyItemQuantityHandler}
            />
          </DrawerBody>
          <DrawerFooter w="100%">
            <Box
              bg="custom.blue"
              w="100%"
              height="100"
              color="white"
              padding="8"
            >
              <Center>
                <Text as="span" fontSize="lg">
                  Total ({totalCartQuantity} Items):{' '}
                  <Text as="span" fontSize="2xl" color="custom.yellow">
                    PHP {totalCartPrice}
                  </Text>
                </Text>

                <Button
                  variant="solid"
                  bg="custom.gray"
                  marginLeft="3"
                  color="custom.blue"
                  borderRadius="0"
                  fontSize="sm"
                  onClick={clearCartHandler}
                >
                  CLEAR CART
                </Button>
                <Button
                  variant="solid"
                  bg="custom.yellow"
                  marginLeft="3"
                  color="custom.blue"
                  borderRadius="0"
                  fontSize="sm"
                  onClick={checkoutHandler}
                >
                  CHECK OUT
                </Button>
              </Center>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ShoppingCart;
