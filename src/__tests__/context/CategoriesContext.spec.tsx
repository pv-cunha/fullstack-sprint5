import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';
import {
  useCategories,
  CategoriesProvider,
} from '../../context/CategoriesContext';

const apiMock = new MockAdapter(api);

const apiResponse = {
  all: [
    {
      id: 1,
      label: 'label-test',
      link: '#link-test',
    },
  ],
  current: [
    {
      id: 1,
      link: '#link-test',
      name: 'name-test',
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

describe('Categories hook context', () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it('should be able to get categories', async () => {
    apiMock.onGet('/data/categories.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useCategories(), {
      wrapper: CategoriesProvider,
    });

    act(() => {
      result.current.getCategories('/data/categories.json');
    });

    await waitForNextUpdate();

    expect(result.current.categories).toEqual([
      {
        id: 1,
        label: 'label-test',
        link: '#link-test',
      },
    ]);
  });

  it('should be able to get current', async () => {
    apiMock.onGet('data/categories.json').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useCategories(), {
      wrapper: CategoriesProvider,
    });

    act(() => {
      result.current.getCurrent('data/categories.json');
    });

    await waitForNextUpdate();

    expect(result.current.current).toEqual([
      {
        id: 1,
        link: '#link-test',
        name: 'name-test',
      },
    ]);
  });

  it('should not be able to get categories', async () => {
    apiMock.onGet('data/categories.json').timeout();

    const { result } = renderHook(() => useCategories(), {
      wrapper: CategoriesProvider,
    });
    act(() => {
      result.current.getCategories('data/categories.json');
    });

    expect(result.current.categories).toEqual([]);
  });

  it('should not be able to get current', async () => {
    apiMock.onGet('data/categories.json').timeout();

    const { result } = renderHook(() => useCategories(), {
      wrapper: CategoriesProvider,
    });
    act(() => {
      result.current.getCurrent('data/categories.json');
    });

    expect(result.current.current).toEqual([]);
  });
});
