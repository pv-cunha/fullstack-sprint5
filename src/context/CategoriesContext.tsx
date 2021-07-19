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
  getCategories: () => Promise<void>;
  getCurrent: () => Promise<void>;
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

  const getCategories = React.useCallback(async () => {
    let response;
    let json;

    try {
      response = await fetch(
        `${process.env.REACT_APP_API_URL}/data/categories.json`,
      );

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
      response = await fetch(
        `${process.env.REACT_APP_API_URL}/data/categories.json`,
      );

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
        getCategories,
        getCurrent,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider, useCategories };
