import { render } from '@testing-library/react';
import Products from '../../../pages/Products/Products';
import { ProductsContext } from '../../../context/ProductsContext';

const mockedBreadcrumbs = [
  { id: 'test-id', link: 'link-test', name: 'name-test' },
];

const mockedFilters = [
  {
    id: 'id-test',
    label: 'label-test',
  },
];

const mockedProducts = [
  {
    name: 'product-test',
    image: 'image-test.svg',
    price: 'price-test',
    sku: 'sku-test',
  },
];

const mockedProductsValue = {
  products: mockedProducts,
  filters: mockedFilters,
  loading: false,
  filtered: [],
  filterProducts: jest.fn(),
  clearFilter: jest.fn(),
};

const mockedFilteredValue = {
  products: mockedProducts,
  filters: mockedFilters,
  loading: false,
  filtered: mockedProducts,
  filterProducts: jest.fn(),
  clearFilter: jest.fn(),
};

jest.mock('react-router-dom', () => {
  return { Link: ({ children }: { children: React.ReactNode }) => children };
});

jest.mock('../../../context/CategoriesContext', () => {
  return {
    useCategories: () => ({
      current: mockedBreadcrumbs,
    }),
  };
});

describe('Products page', () => {
  it('should be showing the products page', () => {
    const { getByText } = render(
      <ProductsContext.Provider value={mockedProductsValue}>
        <Products />
      </ProductsContext.Provider>,
    );

    const breadcrumbText = getByText('name-test');
    const filterText = getByText('label-test');
    const productItemText = getByText('product-test');

    expect(productItemText).toBeInTheDocument();
    expect(filterText).toBeInTheDocument();
    expect(breadcrumbText).toBeInTheDocument();
  });

  it('should be showing the filtered products', () => {
    const { getByText } = render(
      <ProductsContext.Provider value={mockedFilteredValue}>
        <Products />
      </ProductsContext.Provider>,
    );

    const breadcrumbText = getByText('name-test');
    const filterText = getByText('label-test');
    const productItemText = getByText('product-test');

    expect(productItemText).toBeInTheDocument();
    expect(filterText).toBeInTheDocument();
    expect(breadcrumbText).toBeInTheDocument();
  });

  it('should be showing the loading spinner', () => {
    const { getByText } = render(
      <ProductsContext.Provider
        value={{
          products: mockedProducts,
          filters: mockedFilters,
          loading: true,
          filtered: [],
          filterProducts: jest.fn(),
          clearFilter: jest.fn(),
        }}
      >
        <Products />
      </ProductsContext.Provider>,
    );

    const breadcrumbText = getByText('name-test');
    const filterText = getByText('label-test');
    const productItemText = getByText('product-test');

    expect(productItemText).toBeInTheDocument();
    expect(filterText).toBeInTheDocument();
    expect(breadcrumbText).toBeInTheDocument();
  });
});
