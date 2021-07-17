import React from 'react';
import { StyledSizeOption } from './styles';

interface SizeOptionProps {
  selectedSize: number | undefined;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const SizeOption: React.FC<SizeOptionProps> = ({
  size,
  selectedSize,
  setSize,
}) => {
  const selected: boolean = size === selectedSize;

  const handleClick = () => {
    setSize(size);
  };

  return (
    <StyledSizeOption
      selected={selected}
      data-testid="button-test"
      onClick={handleClick}
    >
      {size}
    </StyledSizeOption>
  );
};

export default SizeOption;
