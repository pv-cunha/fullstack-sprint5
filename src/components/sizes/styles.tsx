import styled from 'styled-components';

interface SizeOptionProps {
  selected: boolean;
}

export const StyledSizeOption = styled.button<SizeOptionProps>`
  width: 2.5rem;
  height: 2.5rem;

  background: ${(props) => (props.selected ? '#333' : '#eee')};

  border: 1px solid #ccc;
  border-radius: 0.25rem;

  margin-top: 1rem;
  margin-right: 0.5rem;

  color: ${(props) => (props.selected ? '#eee' : '#333')};
  font-size: 0.6875rem;

  cursor: pointer;

  &:hover {
    background: #333;
    color: #eee;
  }
`;
