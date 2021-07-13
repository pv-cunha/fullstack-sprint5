import React from 'react';
import { MenuItemList } from './styles';

interface CategoryData {
  category: CategoryItemData;
}

interface CategoryItemData {
  label: string;
  link: string;
}

const MenuItem: React.FC<CategoryData> = ({ category }) => {
  const { label, link } = category;

  return (
    <MenuItemList>
      <a href={link}>
        <span>{label}</span>
      </a>
    </MenuItemList>
  );
};

export default MenuItem;
