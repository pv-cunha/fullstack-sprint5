import { render } from '@testing-library/react';
import ProductItem from '../../../components/productItem/ProductItem';

const mockedProductItem = {
  name: 'product-test',
  image: 'image-test.svg',
  price: 'price-test',
  sku: 'sku-test',
};

jest.mock('react-router-dom', () => {
  return { Link: ({ children }: { children: React.ReactNode }) => children };
});

describe('ProductItem component', () => {
  it('should be showing a product item', () => {
    const { getByText } = render(<ProductItem product={mockedProductItem} />);

    const productItemText = getByText('product-test');

    expect(productItemText).toBeInTheDocument();
  });
});
