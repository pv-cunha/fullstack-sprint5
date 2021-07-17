import { render } from '@testing-library/react';
import Menu from '../../../../components/header/menu/Menu';

const mockedCategories = [
  {
    id: 1,
    label: 'Novidades',
    link: '#home',
  },
  {
    id: 2,
    label: 'Feminino',
    link: '#home',
  },
  {
    id: 3,
    label: 'Masculino',
    link: '#home',
  },
  {
    id: 4,
    label: 'Infantil',
    link: '#home',
  },
];

jest.mock('../../../../context/CategoriesContext', () => {
  return {
    useCategories: () => ({
      categories: mockedCategories,
    }),
  };
});

describe('Menu component', () => {
  it('should be showing the menu', () => {
    const { getByText } = render(<Menu />);

    const elementText = getByText('Infantil');

    expect(elementText).toBeInTheDocument();
  });
});
