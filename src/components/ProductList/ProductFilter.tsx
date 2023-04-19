import { Select, Text, Box } from '@chakra-ui/react';
import type { FilterProductProps } from '../../types';
import type { ChangeEvent } from 'react';

function ProductFilter({ setFilterProductsHandler }: FilterProductProps) {
  const categoryList = [
    'All',
    'Groceries',
    'Lifestyle',
    'Cloths',
    'Automotive',
    'Gadgets',
    'Furniture',
    'Toys',
  ];

  const priceSort = ['Highest', 'Lowest', 'Default'];

  const onChangeHandler =
    (filterType: string) => (event: ChangeEvent<HTMLSelectElement>) => {
      const filterValue = event.target.value;
      setFilterProductsHandler(filterType, filterValue);
    };

  return (
    <Box
      w="100%"
      textAlign="right"
      display="flex"
      gap="3"
      justifyContent="right"
      alignItems="center"
    >
      <Text as="span" fontSize="x1" color="gray">
        Category:
      </Text>
      <Select
        bg="custom.gray"
        display="inline-block"
        maxWidth="150"
        variant="outlined"
        defaultValue="all"
        onChange={onChangeHandler('category')}
      >
        {categoryList.map((category, index) => {
          return (
            <option value={category.toLowerCase()} key={index}>
              {category}
            </option>
          );
        })}
      </Select>

      <Text as="span" fontSize="x1" color="gray">
        Price:
      </Text>
      <Select
        bg="custom.gray"
        display="inline-block"
        maxWidth="150"
        variant="outlined"
        defaultValue="default"
        onChange={onChangeHandler('price')}
      >
        {priceSort.map((sort, index) => {
          return (
            <option value={sort.toLowerCase()} key={index}>
              {sort}
            </option>
          );
        })}
      </Select>
    </Box>
  );
}

export default ProductFilter;
