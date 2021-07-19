import { render } from '@testing-library/react';
import Filter from '../../../components/filter/Filter';
import {} from '../../../context/ProductsContext';

const mockedFilters = [
  {
    id: 'test-id',
    label: 'test-label',
  },
];

jest.mock('../../../context/ProductsContext', () => {
  return {
    useProducts: () => ({
      filters: mockedFilters,
      getFilters: () => new Promise(() => mockedFilters),
    }),
  };
});

describe('Filter component', () => {
  it('Should be showing the filters', () => {
    const { getByText } = render(<Filter />);

    const elementText = getByText('test-label');

    expect(elementText).toBeInTheDocument();
  });
});
