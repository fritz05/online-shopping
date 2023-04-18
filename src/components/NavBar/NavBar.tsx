import { Container, Box, Grid } from '@chakra-ui/react';

import NavLogo from './NavLogo';
import NavControl from './NavControl';

function NavBar() {
  return (
    <Box padding="4" bg="custom.blue">
      <Container variant="base">
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <NavLogo />
          <NavControl />
        </Grid>
      </Container>
    </Box>
  );
}

export default NavBar;
