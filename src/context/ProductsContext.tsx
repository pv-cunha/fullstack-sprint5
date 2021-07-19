import React from 'react';
import { useAlert } from './AlertContext';
import api from '../services/api';

interface ProductsData {
  sku: string;
  image: string;
  name: string;
  price: string;
}

interface FilteredData {
  sku: string;
  image: string;
  name: string;
  price: string;
}

interface FiltersData {
  id: string;
  label: string;
}

interface ProductsContextData {
  products: ProductsData[];
  filters: FiltersData[];
  filtered: FilteredData[];
  loading: boolean;
  getProducts: (url: string) => Promise<void>;
  getFilters: (url: string) => Promise<void>;
  filterProducts: (text: string) => void;
  clearFilter: () => void;
}

const ProductsContext = React.createContext<ProductsContextData>(
  {} as ProductsContextData,
);

const useProducts = () => {
  const context = React.useContext(ProductsContext);

  return context;
};

const ProductsProvider: React.FC = ({ children }) => {
  const { addAlert } = useAlert();

  const [products, setProducts] = React.useState<ProductsData[]>([]);
  const [filters, setFilters] = React.useState<FiltersData[]>([]);
  const [filtered, setFiltered] = React.useState<FilteredData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProducts = React.useCallback(
    async (url: string) => {
      try {
        setLoading(true);

        const response = await api.get(url);

        setProducts(response.data.products);
      } catch (err) {
        addAlert({ text: err.message });
      } finally {
        setLoading(false);
      }
    },
    [addAlert],
  );

  const getFilters = React.useCallback(
    async (url: string) => {
      try {
        const response = await api.get(url);

        setFilters(response.data.filters);
      } catch (err) {
        addAlert({ text: err.message });
      }
    },
    [addAlert],
  );

  const filterProducts = (text: string) => {
    const filter = products.filter((product) => {
      const regex = new RegExp(`${text}`, 'gi');

      return product.name.match(regex) || product.price.match(regex);
    });

    setFiltered(filter);
  };

  const clearFilter = () => {
    setFiltered([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filters,
        filtered,
        loading,
        getProducts,
        getFilters,
        filterProducts,
        clearFilter,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts, ProductsContext };
