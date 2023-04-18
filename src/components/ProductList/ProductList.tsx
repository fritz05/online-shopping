import { Box, Center, Container, Grid, Select, Text } from '@chakra-ui/react';
import ProductItems from './ProductItem';

import type { ProductListTypeProps } from '../../types';

function ProductList({ items }: ProductListTypeProps) {
  return (
    <Container variant="content" centerContent>
      <Box
        w="100%"
        textAlign="right"
        display="flex"
        gap="3"
        justifyContent="right"
        alignItems="center"
      >
        <Text as="span" fontSize="x1" color="gray">
          Category:
        </Text>
        <Select
          bg="custom.gray"
          display="inline-block"
          maxWidth="150"
          variant="outlined"
          placeholder="Flushed"
        />
        <Text as="span" fontSize="x1" color="gray">
          Price:
        </Text>
        <Select
          bg="custom.gray"
          display="inline-block"
          maxWidth="150"
          variant="outlined"
          placeholder="Flushed"
        />
      </Box>
      <Center>
        <Grid marginTop="10" templateColumns="repeat(3, 1fr)" gap={6}>
          <ProductItems items={items} />
        </Grid>
      </Center>
    </Container>
  );
}

export default ProductList;
