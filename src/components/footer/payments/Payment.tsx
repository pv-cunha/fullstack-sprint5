import React from 'react';
import {
  Wrapper,
  PaymentContent,
  PaymentAlternatives,
  PaymentTitle,
  PaymentAccessibility,
  PaymentImg,
  PaymentSocial,
  SocialIcons,
  SocialIcon,
  SocialIconImg,
  SocialIconText,
} from './styles';

const Payment: React.FC = () => {
  return (
    <Wrapper>
      <PaymentContent>
        <PaymentAlternatives>
          <PaymentTitle>Formas de Pagamento</PaymentTitle>
          <PaymentImg
            src="assets/ico-cartao-rchlo1.webp"
            alt="Cartão Riachuelo"
          />
          <PaymentImg
            src="assets/ico-cartao-rchlo2.webp"
            alt="Cartão Riachuelo MasterCard"
          />
          <PaymentImg
            src="assets/ico-cartao-rchlo3.webp"
            alt="Cartão Riachuelo Visa"
          />
          <PaymentImg src="assets/ico-cartao-visa.png" alt="Cartão Visa" />
          <PaymentImg
            src="assets/ico-cartao-master.webp"
            alt="Cartão MasterCard"
          />
          <PaymentImg
            src="assets/ico-cartao-amex.webp"
            alt="Cartão American Express"
          />
          <PaymentImg src="assets/ico-cartao-diners.png" alt="Cartão Dinners" />
          <PaymentImg src="assets/ico-cartao-elo.png" alt="Cartão Elo" />
          <PaymentImg src="assets/ico-boleto.webp" alt="Pagamento via boleto" />
          <PaymentImg src="assets/ico-paypal.png" alt="Pagamento via PayPal" />
        </PaymentAlternatives>

        <PaymentSocial>
          <PaymentTitle>Siga a Riachuelo</PaymentTitle>
          <SocialIcons>
            <SocialIcon>
              <a href="#url" title="Ícone Facebook">
                <SocialIconImg src="assets/ico-facebook.svg" alt="" />
              </a>
            </SocialIcon>

            <SocialIcon>
              <a href="#url" title="Ícone Instagram RCHLO">
                <SocialIconImg src="assets/ico-instagram.svg" alt="" />
              </a>
              <SocialIconText>RCHLO</SocialIconText>
            </SocialIcon>

            <SocialIcon>
              <a href="#url" title="Ícone Instagram Casa RCHLO">
                <SocialIconImg src="assets/ico-instagram.svg" alt="" />
              </a>
              <SocialIconText>CASA RCHLO</SocialIconText>
            </SocialIcon>

            <SocialIcon>
              <a href="#url" title="Ícone Pinterest">
                <SocialIconImg src="assets/ico-pinterest.svg" alt="" />
              </a>
            </SocialIcon>

            <SocialIcon>
              <a href="#url" title="Ícone Twitter">
                <SocialIconImg src="assets/ico-twitter.svg" alt="" />
              </a>
            </SocialIcon>

            <SocialIcon>
              <a href="#url" title="Ícone Youtube">
                <SocialIconImg src="assets/ico-youtube.svg" alt="" />
              </a>
            </SocialIcon>

            <SocialIcon>
              <a href="#url" title="Ícone LinkedIn">
                <SocialIconImg src="assets/ico-linkedin.svg" alt="" />
              </a>
            </SocialIcon>
          </SocialIcons>
        </PaymentSocial>

        <PaymentAccessibility>
          <PaymentTitle>Acessibilidade</PaymentTitle>
          <img src="assets/ico-a11y.webp" alt="Ícone NVDA" />
        </PaymentAccessibility>
      </PaymentContent>
    </Wrapper>
  );
};

export default Payment;
