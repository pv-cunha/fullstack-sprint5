import { render, waitFor, fireEvent } from '@testing-library/react';
import Product from '../../../pages/Product/Product';

const mockedHistorypush = jest.fn();
const mockedAddAlert = jest.fn();

const mockedProducts = [
  {
    name: 'product-test',
    image: 'image-test.svg',
    price: 'price-test',
    sku: 1,
  },
];

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistorypush,
    }),
    useParams: () => ({
      id: 1,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../../context/AlertContext', () => {
  return {
    useAlert: () => ({
      addAlert: mockedAddAlert,
    }),
  };
});

jest.mock('../../../context/ProductsContext', () => {
  return {
    useProducts: () => ({
      products: mockedProducts,
    }),
  };
});

describe('Product page', () => {
  it('should be showing the product page', async () => {
    const { getByText, getByAltText } = render(<Product />);

    const textElement = getByText('product-test');
    const imageElement = getByAltText('product-test');

    await waitFor(() => {
      expect(textElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
    });
  });

  it('should be able to go products page', async () => {
    const { getByText } = render(<Product />);

    const buttonElement = getByText('Adicionar à sacola');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistorypush).toHaveBeenCalledWith('/');
    });
  });
});
