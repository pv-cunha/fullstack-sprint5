import styled from 'styled-components';

export const MenuItemList = styled.li`
  font-size: 0.8125rem;
  font-weight: bold;
  line-height: 1.5;
  text-transform: uppercase;

  padding-bottom: 8px;

  border-bottom: 2px solid transparent;

  transition: border-bottom 0.1s ease;

  &:hover {
    border-color: #333;
  }
`;
