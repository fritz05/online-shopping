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

export interface FilterProductProps {
  setFilterProductsHandler: (filterType: string, filterValue: string) => void;
}

export type NavProps = OnOpenProps & FilterProductProps;

export interface ProductItemTypeProps {
  items: ProductListType[];
}

export type ProductListTypeProps = ProductItemTypeProps & FilterProductProps;

export type OnCloseProps = Omit<
  Required<UseDisclosureProps>,
  'onOpen' | 'id' | 'defaultIsOpen'
>;

export type OnOpenProps = Omit<
  Required<UseDisclosureProps>,
  'onClose' | 'isOpen' | 'id' | 'defaultIsOpen'
>;
