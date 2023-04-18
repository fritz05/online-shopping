import { Container, Box, Grid, UseDisclosureProps } from '@chakra-ui/react';

import NavLogo from './NavLogo';
import NavControl from './NavControl';
import { OnOpenProps } from '../../types';

function NavBar({ onOpen }: OnOpenProps) {
  return (
    <Box padding="4" bg="custom.blue">
      <Container variant="base">
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <NavLogo />
          <NavControl onOpen={onOpen} />
        </Grid>
      </Container>
    </Box>
  );
}

export default NavBar;
