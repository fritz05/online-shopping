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
  Center,
} from '@chakra-ui/react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import type {
  AddToCartHandlerType,
  OnCloseProps,
  ProductListType,
} from '../../types';

type ProductDetailsType = OnCloseProps & AddToCartHandlerType;
interface ProductDetailsProps extends ProductDetailsType {
  selectedItem: Partial<ProductListType>;
}

function ProductDetails({
  isOpen,
  onClose,
  selectedItem,
  addCartListHandler,
}: ProductDetailsProps) {
  const isItemExist = Object.keys(selectedItem).length > 0;

  const addToCartHandler = (productId: string) => () => {
    const alertDialogue = withReactContent(Swal);

    onClose();
    alertDialogue.fire({
      title: <strong>Added to cart!</strong>,
      html: <h6>Your product has been added to cart</h6>,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
    });

    addCartListHandler(productId);
  };

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
                  <Center>
                    <Image
                      src={selectedItem.imageUrl}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      boxSize="350"
                    />
                  </Center>

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
                onClick={addToCartHandler(selectedItem.id ?? '')}
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
