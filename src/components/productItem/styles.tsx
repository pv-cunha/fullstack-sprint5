import styled from 'styled-components';

export const Card = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 48rem) {
    width: calc(100% - 16px);
  }
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardDescription = styled.figcaption`
  text-align: center;
  text-transform: uppercase;
  font-size: 0.6875rem;
  line-height: 1.43;
  margin: 0.5rem 0;
`;

export const CardPrice = styled.p`
  text-align: center;
  font-weight: bold;
`;
