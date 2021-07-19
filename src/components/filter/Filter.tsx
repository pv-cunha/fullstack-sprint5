import React from 'react';
import { FilterSection, FilterList } from './styles';
import FilterItem from './filterItem/FilterItem';
import { useProducts } from '../../context/ProductsContext';

const Filter: React.FC = () => {
  const { filters, getFilters } = useProducts();

  React.useEffect(() => {
    getFilters('data/products.json');

    // eslint-disable-next-line
  }, []);

  return (
    <FilterSection className={`container`}>
      <FilterList>
        {filters &&
          filters.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} />
          ))}
      </FilterList>
    </FilterSection>
  );
};

export default Filter;
