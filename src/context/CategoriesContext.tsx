import React from 'react';
import api from '../services/api';
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
  getCategories: (url: string) => Promise<void>;
  getCurrent: (url: string) => Promise<void>;
}

const CategoriesContext = React.createContext<CategoriesContextData>(
  {} as CategoriesContextData,
);

const useCategories = () => {
  const context = React.useContext(CategoriesContext);

  return context;
};

const CategoriesProvider: React.FC = ({ children }) => {
  const { addAlert } = useAlert();

  const [categories, setCategories] = React.useState<CategoriesData[]>([]);
  const [current, setCurrent] = React.useState<CurrentData[]>([]);

  const getCategories = React.useCallback(
    async (url: string) => {
      try {
        const response = await api.get(url);

        setCategories(response.data.all);
      } catch (err) {
        addAlert({ text: err.message });
      }
    },
    [addAlert],
  );

  const getCurrent = React.useCallback(
    async (url: string) => {
      try {
        const response = await api.get(url);

        setCurrent(response.data.current);
      } catch (err) {
        addAlert({ text: err.message });
      }
    },
    [addAlert],
  );

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
