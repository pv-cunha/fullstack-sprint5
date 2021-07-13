import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;

  border-bottom: 1px solid #eee;

  @media (max-width: 48rem) {
    display: none;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    display: none;
  }
`;

export const BreadcrumbNav = styled.nav`
  padding-bottom: 0.5rem;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
`;
