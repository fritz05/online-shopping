import {
  Image,
  Text,
  Card,
  CardBody,
  Heading,
  Stack,
  GridItem,
  Center,
} from '@chakra-ui/react';

import type { ProductListTypeProps } from '../../types';

function ProductItems({ items }: ProductListTypeProps) {
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
          <GridItem key={items.id}>
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

                  <Text color="blue.600" fontSize="2xl">
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
