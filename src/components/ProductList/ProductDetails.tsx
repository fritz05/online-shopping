import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  Card,
  CardBody,
  Divider,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import { OnCloseProps, ProductListType } from '../../types';

interface ProductDetailsProps extends OnCloseProps {
  selectedItem: Partial<ProductListType>;
}

function ProductDetails({
  isOpen,
  onClose,
  selectedItem,
}: ProductDetailsProps) {
  const isItemExist = Object.keys(selectedItem).length > 0;

  return (
    <>
      {isItemExist && (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Product Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={selectedItem.imageUrl}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{selectedItem.productName}</Heading>
                    <Text>{selectedItem.description}</Text>
                    <Text color="custom.blue" fontSize="2xl">
                      PHP {selectedItem.unitPrice}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </ModalBody>
            <ModalFooter paddingRight="10">
              <Button fontSize="sm" onClick={onClose}>
                CLOSE
              </Button>
              <Button
                variant="solid"
                bg="custom.blue"
                borderRadius="sm"
                colorScheme="blue"
                fontSize="sm"
              >
                ADD TO CART
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default ProductDetails;
