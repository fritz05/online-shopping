import {
  Card,
  Stack,
  CardBody,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import ItemQuantifier from './ItemQuantifier';

import type {
  ModifyItemQuantityHandlerType,
  ShoppingCartItemProps,
  ShoppingCartItemType,
} from '../../types';

type ShoppingCartItemTypes = ShoppingCartItemProps &
  ModifyItemQuantityHandlerType;

function ShoppingCartItem({
  cartItemDetails,
  setModifyItemQuantityHandler,
}: ShoppingCartItemTypes) {
  return (
    <>
      {cartItemDetails.map((item: ShoppingCartItemType) => (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          padding="3"
          key={item.id}
        >
          <Image
            borderRadius="md"
            boxSize="150px"
            src={item.imageUrl}
            alt={item.productName}
          />
          <Stack>
            <CardBody>
              <TableContainer>
                <Table
                  variant="unstyled"
                  whiteSpace="break-spaces"
                  wordBreak="break-all"
                  overflowX="hidden"
                >
                  <Thead>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Price</Th>
                      <Th isNumeric>Quantity</Th>
                      <Th isNumeric>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td width="40">{item.productName}</Td>
                      <Td width="30">{item.unitPrice}</Td>
                      <Td width="70">
                        <ItemQuantifier
                          setModifyItemQuantityHandler={
                            setModifyItemQuantityHandler
                          }
                          quantity={item.quantity}
                          id={item.id}
                        />
                      </Td>
                      <Td width="30">{item.totalPrice}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </>
  );
}

export default ShoppingCartItem;
