import {
  Image,
  Text,
  Card,
  CardBody,
  Heading,
  Stack,
  GridItem,
  Center,
  Button,
} from '@chakra-ui/react';
import type { MouseEvent } from 'react';
import { MouseEventHandler } from 'react';

import type { ProductListType } from '../../types';

interface ProductItemsProps {
  items: ProductListType[];
  onOpen: MouseEventHandler<HTMLDivElement>;
  selectItemHandler: (productId: string) => void;
}

function ProductItems({ items, onOpen, selectItemHandler }: ProductItemsProps) {
  const onClickHandler =
    (key: string) => (event: MouseEvent<HTMLDivElement>) => {
      console.log(key);
      onOpen(event);
      selectItemHandler(key);
    };

  return (
    <>
      {items.map((items) => {
        const productName =
          items.productName.length > 15
            ? `${items.productName.substring(0, 16)}...`
            : items.productName;

        const cardHoverStyle = {
          outline: '1px solid #142B6F',
          marginTop: '-4px',
          cursor: 'pointer',
        };

        return (
          <GridItem onClick={onClickHandler(items.id)} key={items.id}>
            <Card
              maxW="sm"
              display="inline-block"
              _hover={cardHoverStyle}
              borderRadius="0"
            >
              <CardBody>
                <Center>
                  <Image
                    src={items.imageUrl}
                    alt={productName}
                    boxSize="250px"
                    borderRadius="md"
                  />
                </Center>

                <Stack mt="6" spacing="3">
                  <Heading
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    size="md"
                  >
                    {productName}
                  </Heading>

                  <Text color="custom.blue" fontSize="lg">
                    PHP {items.unitPrice}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        );
      })}
    </>
  );
}

export default ProductItems;
