import React from 'react';
import { MenuNav, MenuList } from './styles';
import MenuItem from './menuItem/MenuItem';
import { useCategories } from '../../../context/CategoriesContext';

const Menu: React.FC = () => {
  const { categories } = useCategories();

  return (
    <MenuNav>
      <MenuList>
        {categories &&
          categories.map((category) => (
            <MenuItem key={category.id} category={category} />
          ))}
      </MenuList>
    </MenuNav>
  );
};

export default Menu;
