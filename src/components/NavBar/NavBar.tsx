import { Container, Box, Grid } from '@chakra-ui/react';

import NavLogo from './NavLogo';
import NavControl from './NavControl';
import { NavProps } from '../../types';

interface NavBarProps extends NavProps {
  searchProduct: string;
}

function NavBar({
  onOpen,
  setFilterProductsHandler,
  searchProduct,
}: NavBarProps) {
  return (
    <Box padding="4" bg="custom.blue">
      <Container variant="base">
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <NavLogo />
          <NavControl
            setFilterProductsHandler={setFilterProductsHandler}
            onOpen={onOpen}
            searchProduct={searchProduct}
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default NavBar;
