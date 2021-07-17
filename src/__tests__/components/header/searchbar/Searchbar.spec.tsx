import { render, fireEvent, waitFor } from '@testing-library/react';
import Searchbar from '../../../../components/header/searchbar/Searchbar';

jest.mock('../../../../context/ProductsContext', () => {
  return {
    useProducts: () => ({
      filterProducts: jest.fn(),
      clearFilter: jest.fn(),
    }),
  };
});

describe('Searchbar component', () => {
  it('should be using the searchbar', () => {
    const { getByPlaceholderText } = render(<Searchbar />);

    const inputElement = getByPlaceholderText('O que você está procurando?');

    fireEvent.change(inputElement, {
      target: { value: '' },
    });

    expect(inputElement).toHaveDisplayValue('');
  });

  it('should be changing states', async () => {
    const { getByPlaceholderText } = render(<Searchbar />);

    const inputElement = getByPlaceholderText('O que você está procurando?');

    fireEvent.change(inputElement, {
      target: { value: 'foo' },
    });

    await waitFor(() => {
      expect(inputElement).toHaveDisplayValue('foo');
    });
  });
});
