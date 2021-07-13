import React from 'react';
import styles from './Header.module.css';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import Menu from './menu/Menu';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
      <Menu />
    </header>
  );
};

export default Header;
