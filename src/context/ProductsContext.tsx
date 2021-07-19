import React from 'react';
import { useAlert } from './AlertContext';

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
  getProducts: () => Promise<void>;
  getFilters: () => Promise<void>;
  filterProducts: (text: string) => void;
  clearFilter: () => void;
}

const ProductsContext = React.createContext<ProductsContextData>(
  {} as ProductsContextData,
);

const useProducts = () => {
  const context = React.useContext(ProductsContext);

  if (!context) {
    throw new Error('useToast must be used within a ProductsProvider !');
  }

  return context;
};

const ProductsProvider: React.FC = ({ children }) => {
  const { addAlert } = useAlert();

  const [products, setProducts] = React.useState<ProductsData[]>([]);
  const [filters, setFilters] = React.useState<FiltersData[]>([]);
  const [filtered, setFiltered] = React.useState<FilteredData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProducts = React.useCallback(async () => {
    let response;
    let json;

    try {
      setLoading(true);

      response = await fetch('http://localhost:3000/data/products.json');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados dos produtos !');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setLoading(false);

      setProducts(json.products);
    }
  }, [addAlert]);

  const getFilters = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch('http://localhost:3000/data/products.json');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados dos filtros !');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setFilters(json.filters);
    }
  }, [addAlert]);

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
