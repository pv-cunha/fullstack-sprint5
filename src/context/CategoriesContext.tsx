import React from 'react';
import { useAlert } from './AlertContext';

interface CategoriesData {
  id: string;
  label: string;
  link: string;
}

interface CurrentData {
  id: string;
  link: string;
  name: string;
}

interface CategoriesContextData {
  categories: CategoriesData[];
  current: CurrentData[];
}

const CategoriesContext = React.createContext<CategoriesContextData>(
  {} as CategoriesContextData,
);

const useCategories = () => {
  const context = React.useContext(CategoriesContext);

  if (!context) {
    throw new Error('useToast must be used within a CategoriesProvider !');
  }

  return context;
};

const CategoriesProvider: React.FC = ({ children }) => {
  const { addAlert } = useAlert();

  const [categories, setCategories] = React.useState<CategoriesData[]>([]);
  const [current, setCurrent] = React.useState<CurrentData[]>([]);

  React.useEffect(() => {
    getCategories();

    getCurrent();

    // eslint-disable-next-line
  }, []);

  const getCategories = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch('http://localhost:3000/data/categories.json');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados das categorias !');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setCategories(json.all);
    }
  }, [addAlert]);

  const getCurrent = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch('http://localhost:3000/data/categories.json');

      if (!response.ok) {
        throw new Error('Erro ao carregar os dados das breadcrumbs!');
      }

      json = await response.json();
    } catch (err) {
      json = null;
      addAlert({ text: err.message });
    } finally {
      setCurrent(json.current);
    }
  }, [addAlert]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        current,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, useCategories };
