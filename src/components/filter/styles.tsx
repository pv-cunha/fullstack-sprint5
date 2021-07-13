import styled from 'styled-components';

export const FilterSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  height: 100%;

  padding: 0 0.3rem;

  border-bottom: 1px solid #eee;

  @media (max-width: 48rem) {
    display: none;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    display: none;
  }
`;

export const FilterList = styled.ul`
  display: flex;
`;
