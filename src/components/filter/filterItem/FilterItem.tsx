import React from 'react';

import { ListBtn, ListImg, ListName } from './styles';

interface FilterItemData {
  label: string;
}

const FilterItem: React.FC<FilterItemData> = ({ label }) => {
  return (
    <li>
      <ListBtn>
        <ListName>{label}</ListName>
        <ListImg src="assets/filter.svg" alt="" />
      </ListBtn>
    </li>
  );
};

export default FilterItem;
