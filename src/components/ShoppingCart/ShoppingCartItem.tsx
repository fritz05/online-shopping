import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import ItemQuantifier from './ItemQuantifier';

function ShoppingCartItem() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      padding="3"
    >
      <Image
        objectFit="cover"
        borderRadius="md"
        boxSize="150px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
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
                  <Th>Product Name</Th>
                  <Th>Price</Th>
                  <Th isNumeric>Quantity</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td width="60">Product Tesd</Td>
                  <Td width="60">PHP 10000000.00</Td>
                  <Td width="80">
                    <ItemQuantifier />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default ShoppingCartItem;
