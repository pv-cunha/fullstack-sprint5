import { render } from '@testing-library/react';
import Filter from '../../../components/filter/Filter';

describe('Filter component', () => {
  it('Should be showing the filters', () => {
    const filters = [
      {
        id: 'size',
        label: 'Tamanho',
      },
      {
        id: 'color',
        label: 'Cor',
      },
      {
        id: 'department',
        label: 'Departamento',
      },
      {
        id: 'category',
        label: 'Categoria',
      },
      {
        id: 'sleeve',
        label: 'Manga',
      },
    ];

    const { getByText } = render(<Filter filters={filters} />);

    const elementText = getByText('Categoria');

    expect(elementText).toBeInTheDocument();
  });
});
