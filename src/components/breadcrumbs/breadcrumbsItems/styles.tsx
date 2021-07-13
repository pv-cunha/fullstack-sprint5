import styled from 'styled-components';

export const BreadcrumbList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Anchor = styled.a`
  font-size: 0.75rem;
  font-weight: 600;
  color: #878787;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: #333;
  }

  &.active {
    color: #333;
    font-size: 0.8rem;
  }
`;

export const Separator = styled.span`
  display: block;
  margin: 0 0.5rem;

  &.active {
    display: none;
  }
`;
