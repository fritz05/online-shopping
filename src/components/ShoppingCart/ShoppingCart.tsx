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
import { OnCloseProps } from '../../types';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart({ onClose, isOpen }: OnCloseProps) {
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
            <ShoppingCartItem />
            <ShoppingCartItem />
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
                  Total (0 Item):{' '}
                  <Text as="span" fontSize="2xl" color="custom.yellow">
                    PHP 1000.00
                  </Text>
                </Text>

                <Button
                  variant="solid"
                  bg="custom.gray"
                  marginLeft="3"
                  color="custom.blue"
                  borderRadius="0"
                >
                  Clear Cart
                </Button>
                <Button
                  variant="solid"
                  bg="custom.yellow"
                  marginLeft="3"
                  color="custom.blue"
                  borderRadius="0"
                >
                  Check Out
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
