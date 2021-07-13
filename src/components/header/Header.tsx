import React from 'react';
import { HeaderStyled } from './styles';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import Menu from './menu/Menu';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Searchbar />
      <Menu />
    </HeaderStyled>
  );
};

export default Header;
