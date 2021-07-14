import styled from 'styled-components';

interface AnchorActive {
  active: boolean;
}

interface SeparatorActive {
  active: boolean;
}

export const BreadcrumbList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Anchor = styled.a<AnchorActive>`
  font-size: ${({ active }) => (active ? '0.8rem' : '0.7rem')};
  color: ${({ active }) => (active ? '#333' : '##878787')};
  font-weight: ${({ active }) => (active ? '800' : '600')};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: #333;
  }
`;

export const Separator = styled.span<SeparatorActive>`
  display: ${({ active }) => (active ? 'none' : 'block')};
  margin: 0 0.5rem;
`;
