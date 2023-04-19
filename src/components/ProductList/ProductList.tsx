import { Center, Container, Grid, useDisclosure } from '@chakra-ui/react';
import ProductItems from './ProductItem';
import ProductDetails from './ProductDetails';
import { memo, useState } from 'react';

import type { ProductListTypeProps } from '../../types';
import ProductFilter from './ProductFilter';

function ProductList({
  items,
  setFilterProductsHandler,
  addCartListHandler,
}: ProductListTypeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedItem, setSelectedItem] = useState({});

  const setSelectItemHandler = (productId: string) => {
    const filteredItem = items.find((items) => items.id === productId);
    setSelectedItem(filteredItem || {});
  };

  return (
    <Container variant="content" centerContent>
      <ProductFilter setFilterProductsHandler={setFilterProductsHandler} />
      <Center>
        <Grid marginTop="10" templateColumns="repeat(3, 1fr)" gap={6}>
          <ProductItems
            selectItemHandler={setSelectItemHandler}
            onOpen={onOpen}
            items={items}
          />
        </Grid>
      </Center>
      <ProductDetails
        selectedItem={selectedItem}
        isOpen={isOpen}
        onClose={onClose}
        addCartListHandler={addCartListHandler}
      />
    </Container>
  );
}

export default memo(ProductList);
