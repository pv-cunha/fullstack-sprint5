import React from 'react';
import {
  Content,
  ContentMobile,
  ButtonMobile,
  DrawerClose,
  LogoTitle,
  Mobile,
  Desktop,
} from './styles';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Content>
      <ContentMobile>
        <ButtonMobile type="button">
          <img src="assets/menu.svg" alt="Botão para abrir o menu navegação" />
          <LogoTitle>menu</LogoTitle>
        </ButtonMobile>

        <DrawerClose type="button">
          <img
            src="assets/close.svg"
            alt="Botão para fechar o menu navegação"
          />
          <LogoTitle>fechar</LogoTitle>
        </DrawerClose>
      </ContentMobile>

      <Mobile>
        <Link to="/">
          <img src="assets/rchlo.svg" alt="Home Riachuelo" />
        </Link>
      </Mobile>

      <Desktop>
        <Link to="/">
          <img src="assets/riachuelo.svg" alt="Home Riachuelo" />
        </Link>
      </Desktop>

      <span></span>
    </Content>
  );
};

export default Logo;
