import { render } from '@testing-library/react';
import Header from '../../../components/header/Header';

const clearFilter = jest.fn();

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
