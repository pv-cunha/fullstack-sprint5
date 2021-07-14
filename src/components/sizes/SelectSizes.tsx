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

  return (
    <StyledSizeOption selected={selected} onClick={() => setSize(size)}>
      {size}
    </StyledSizeOption>
  );
};

export default SizeOption;
