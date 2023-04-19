import { Heading, GridItem, Text, Button } from '@chakra-ui/react';
import { AiFillShop } from 'react-icons/ai';

function NavLogo() {
  return (
    <GridItem colSpan={2}>
      <Button variant="transparent">
        <Heading as="h2" size="lg" color="white">
          <Text>
            <AiFillShop
              style={{
                display: 'inline-block',
                verticalAlign: 'text-top',
                marginRight: '5px',
              }}
            />
            <Text as="span" color="custom.yellow">
              Snap
            </Text>
            <Text as="span">Shop</Text>
          </Text>
        </Heading>
      </Button>
    </GridItem>
  );
}

export default NavLogo;
