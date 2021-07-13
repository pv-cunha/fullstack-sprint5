import React from 'react';

import { FilterSection, FilterList } from './styles';
import FilterItem from './filterItem/FilterItem';

interface FiltersData {
  filters: FilterData[];
}

interface FilterData {
  id: string;
  label: string;
}

const Filter: React.FC<FiltersData> = ({ filters }) => {
  return (
    <FilterSection className={`container`}>
      <FilterList>
        {filters.map((filter) => (
          <FilterItem key={filter.id} label={filter.label} />
        ))}
      </FilterList>
    </FilterSection>
  );
};

export default Filter;
