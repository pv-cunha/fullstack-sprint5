import React from 'react';
import { FooterStyled } from './styles';
import Contacts from './contacts/Contacts';
import Links from './links/Links';
import Payment from './payments/Payment';
import Credits from './credits/Credits';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Contacts />
      <Links />
      <Payment />
      <Credits />
    </FooterStyled>
  );
};

export default Footer;
