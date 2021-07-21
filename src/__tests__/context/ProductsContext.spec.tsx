import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';
import { useProducts, ProductsProvider } from '../../context/ProductsContext';

const apiMock = new MockAdapter(api);

const apiResponse = {
  products: [
    {
      sku: 1,
      image: 'image-test.webp',
      name: 'description-test',
      price: 'price-test',
    },
  ],
  filters: [
    {
      id: 'id-test',
      label: 'label-test',
    },
  ],
};

jest.mock('../../context/AlertContext', () => {
  return {
    useAlert: () => ({
      addAlert: jest.fn(),
    }),
  };
});

describe('Products hook context', () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it('should be able to get products', async () => {
    apiMock.onGet('data/products.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    act(() => {
      result.current.getProducts('data/products.json');
    });

    await waitForNextUpdate();

    expect(result.current.products).toEqual([
      {
        sku: 1,
        image: 'image-test.webp',
        name: 'description-test',
        price: 'price-test',
      },
    ]);
  });

  it('should be able to get filters', async () => {
    apiMock.onGet('data/products.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    act(() => {
      result.current.getFilters('data/products.json');
    });

    await waitForNextUpdate();

    expect(result.current.filters).toEqual([
      {
        id: 'id-test',
        label: 'label-test',
      },
    ]);
  });

  it('should be able to filter by name', async () => {
    apiMock.onGet('data/products.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    act(() => {
      result.current.getProducts('data/products.json');
    });

    await waitForNextUpdate();

    act(() => {
      result.current.filterProducts('desc');
    });

    expect(result.current.filtered).toStrictEqual([
      {
        sku: 1,
        image: 'image-test.webp',
        name: 'description-test',
        price: 'price-test',
      },
    ]);
  });

  it('should be able to filter by price', async () => {
    apiMock.onGet('data/products.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    act(() => {
      result.current.getProducts('data/products.json');
    });

    await waitForNextUpdate();

    act(() => {
      result.current.filterProducts('price');
    });

    expect(result.current.filtered).toStrictEqual([
      {
        sku: 1,
        image: 'image-test.webp',
        name: 'description-test',
        price: 'price-test',
      },
    ]);
  });

  it('should be able to clear filter', async () => {
    apiMock.onGet('data/products.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });

    act(() => {
      result.current.getProducts('data/products.json');
    });

    await waitForNextUpdate();

    act(() => {
      result.current.filterProducts('desc');
    });

    act(() => {
      result.current.clearFilter();
    });

    expect(result.current.filtered).toStrictEqual([]);
  });

  it('should not be able to get products', async () => {
    apiMock.onGet('data/products.json').timeout();

    const { result } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });
    act(() => {
      result.current.getProducts('data/products.json');
    });

    expect(result.current.products).toEqual([]);
  });

  it('should not be able to get filters', async () => {
    apiMock.onGet('data/products.json').timeout();

    const { result } = renderHook(() => useProducts(), {
      wrapper: ProductsProvider,
    });
    act(() => {
      result.current.getFilters('data/products.json');
    });

    expect(result.current.filters).toEqual([]);
  });
});
