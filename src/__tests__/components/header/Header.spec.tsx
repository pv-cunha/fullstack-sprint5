import { render } from '@testing-library/react';
import Header from '../../../components/header/Header';

jest.mock('../../../context/ProductsContext', () => {
  return {
    useProducts: () => ({
      filterProducts: jest.fn(),
      clearFilter: jest.fn(),
    }),
  };
});

jest.mock('../../../context/CategoriesContext', () => {
  return {
    useCategories: () => ({
      getCategories: jest.fn(),
    }),
  };
});

jest.mock('react-router-dom', () => {
  return { Link: ({ children }: { children: React.ReactNode }) => children };
});

describe('Header component', () => {
  it('should be showing the header', () => {
    const { getByPlaceholderText, getByText } = render(<Header />);

    const inputElement = getByPlaceholderText('O que você está procurando?');
    const textElement = getByText('fechar');

    expect(inputElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
