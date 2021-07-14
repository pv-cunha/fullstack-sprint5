import styled from 'styled-components';

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr 1fr;
  }
`;
