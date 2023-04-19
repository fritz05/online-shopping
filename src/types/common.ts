import { UseDisclosureProps } from '@chakra-ui/react';

export interface ProductListType {
  id: string;
  productName: string;
  description: string;
  unitPrice: number;
  category: string;
  imageUrl: string;
}
``;
export interface AddToCartHandlerType {
  addCartListHandler: (productId: string) => void;
}

export interface SelectItemHandlerType {
  selectItemHandler: (productId: string) => void;
}

export interface ClearCartHandlerType {
  setClearCartHandler: () => void;
}

export interface FilterProductProps {
  setFilterProductsHandler: (filterType: string, filterValue: string) => void;
}

export interface ModifyItemQuantityHandlerType {
  setModifyItemQuantityHandler: (
    productId: string,
    modifiedQuantity: number,
  ) => void;
}

export type NavProps = OnOpenProps & FilterProductProps;

export interface ProductItemTypeProps {
  items: ProductListType[];
}

export type ProductListTypeProps = ProductItemTypeProps &
  FilterProductProps &
  AddToCartHandlerType;

export type OnCloseProps = Omit<
  Required<UseDisclosureProps>,
  'onOpen' | 'id' | 'defaultIsOpen'
>;

export type OnOpenProps = Omit<
  Required<UseDisclosureProps>,
  'onClose' | 'isOpen' | 'id' | 'defaultIsOpen'
>;

export interface CartListType {
  id: string;
  quantity: number;
}

export interface ShoppingCartItemType extends ProductListType {
  quantity: number;
  totalPrice: number;
}

export interface ShoppingCartItemProps {
  cartItemDetails: ShoppingCartItemType[];
}
