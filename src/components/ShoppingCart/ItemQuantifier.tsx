import { useNumberInput, HStack, Button, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

import { CartListType, ModifyItemQuantityHandlerType } from '../../types';

type ItemQuantifierProps = ModifyItemQuantityHandlerType & CartListType;
function ItemQuantifier({
  quantity,
  id,
  setModifyItemQuantityHandler,
}: ItemQuantifierProps) {
  const [inputValue, setInputValue] = useState(quantity);

  const onClickHandler = (type: 'increase' | 'decrease') => () => {
    if (!inputValue && type === 'decrease') return;

    setInputValue((prevData) =>
      type === 'increase' ? prevData + 1 : prevData - 1,
    );
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    if (inputValue < 0) return;

    setInputValue(inputValue);
    setModifyItemQuantityHandler(id, inputValue);
  };

  useEffect(() => {
    setModifyItemQuantityHandler(id, inputValue);
  }, [inputValue, id]);

  return (
    <HStack maxW="170px">
      <Button onClick={onClickHandler('decrease')}>-</Button>
      <Input
        type="number"
        min="0"
        value={inputValue}
        onChange={onChangeHandler}
        textAlign="center"
      />
      <Button onClick={onClickHandler('increase')}>+</Button>
    </HStack>
  );
}

export default ItemQuantifier;
