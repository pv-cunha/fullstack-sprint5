import React from 'react';
import styles from './MenuItem.module.css';

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
    <li className={styles.menuItem}>
      <a href={link}>
        <span>{label}</span>
      </a>
    </li>
  );
};

export default MenuItem;
