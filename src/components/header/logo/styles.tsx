import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media (max-width: 48rem) {
    justify-content: space-between;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    justify-content: space-between;
  }
`;

export const ContentMobile = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: block;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    display: block;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: block;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    display: block;
  }
`;

export const Desktop = styled.div`
  display: block;

  @media (max-width: 48rem) {
    display: none;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    display: none;
  }
`;

export const LogoTitle = styled.p`
  color: #333;
`;

export const ButtonMobile = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  color: #d3d3d3;

  border: none;

  padding: 12px;

  border-radius: 50%;

  cursor: pointer;

  transition: background 0.2s;

  font-size: 0.8rem;

  &:hover {
    background: #eee;
  }
`;

export const DrawerClose = styled(ButtonMobile)`
  display: none;
`;
