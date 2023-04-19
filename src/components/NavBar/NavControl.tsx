import {
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import type { ChangeEvent } from 'react';

import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { NavProps } from '../../types';

interface NavControlProps extends NavProps {
  searchProduct: string;
}
function NavControl({
  onOpen,
  setFilterProductsHandler,
  searchProduct,
}: NavControlProps) {
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setFilterProductsHandler('search', searchValue);
  };

  return (
    <GridItem colStart={3} colEnd={25} h="10">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FiSearch />} />
            <Input
              onChange={searchHandler}
              type="text"
              placeholder="Search Snap"
              bg="white"
              value={searchProduct}
            />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={1} h="10">
          <Button variant="transparent" onClick={onOpen}>
            <Text fontSize="4xl" color="custom.yellow">
              <RiShoppingCartLine />
            </Text>
          </Button>
        </GridItem>
      </Grid>
    </GridItem>
  );
}

export default NavControl;
