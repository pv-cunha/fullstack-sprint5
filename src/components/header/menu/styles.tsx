import styled from 'styled-components';

export const MenuNav = styled.nav`
  width: 100%;
  max-width: 80rem;

  margin: 0.5rem auto 0 auto;
  padding: 0 0.5rem;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.5rem;

  @media (max-width: 48rem) {
    display: none;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    display: none;
  }
`;
