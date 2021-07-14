import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 1.5625rem 0;

  padding: 0.3rem;
`;

export const PaymentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const PaymentAlternatives = styled.div`
  width: 50%;

  @media (max-width: 48rem) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

export const PaymentTitle = styled.h3`
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 48rem) {
    text-align: center;
  }
`;

export const PaymentImg = styled.img`
  margin: 0.2rem;
  width: auto;
`;

export const PaymentSocial = styled.div`
  flex-grow: 1;

  @media (max-width: 48rem) {
    margin: 0.5rem 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 50px;
`;

export const SocialIconImg = styled.img`
  display: block;
  margin: auto;
`;

export const SocialIconText = styled.p`
  padding-top: 4px;
  font-size: 0.6875rem;
  font-weight: 300;
  text-align: center;
`;

export const PaymentAccessibility = styled.div`
  flex-grow: 1;

  @media (max-width: 48rem) {
    margin: 0.5rem 0;
  }
`;
