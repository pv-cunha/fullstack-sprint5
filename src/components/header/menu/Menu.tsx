import React from 'react';
import { MenuNav, MenuList } from './styles';
import MenuItem from './menuItem/MenuItem';
import { useCategories } from '../../../context/CategoriesContext';

const Menu: React.FC = () => {
  const { categories, getCategories } = useCategories();

  React.useEffect(() => {
    getCategories('/data/categories.json');

    // eslint-disable-next-line
  }, []);

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
