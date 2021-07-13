import React from 'react';
import styles from './FilterItem.module.css';

interface FilterItemData {
  label: string;
}

const FilterItem: React.FC<FilterItemData> = ({ label }) => {
  return (
    <li className={styles.listItem}>
      <button className={styles.listBtn}>
        <p className={styles.listName}>{label}</p>
        <img src="assets/filter.svg" alt="" className={styles.listSVG} />
      </button>
    </li>
  );
};

export default FilterItem;
