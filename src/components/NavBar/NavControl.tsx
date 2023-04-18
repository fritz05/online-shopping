import {
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCartLine } from 'react-icons/ri';

function NavControl() {
  return (
    <GridItem colStart={3} colEnd={25} h="10">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FiSearch />} />
            <Input type="text" placeholder="Search Snap" bg="white" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={1} h="10">
          <Button variant="transparent">
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