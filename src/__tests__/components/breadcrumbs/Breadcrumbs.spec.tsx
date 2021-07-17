import { render } from '@testing-library/react';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';

const mockedBreadcrumbs = [
  { id: '1', link: '#home', name: 'Home' },
  { id: '2', link: '#home', name: 'Infantil' },
  { id: '2', link: '#home', name: 'Personagens' },
  { id: '4', link: 'fake', name: 'Mario Bros' },
];

describe('Breadcrumbs component', () => {
  it('should be showing the breadcrumbs', () => {
    const { getByText } = render(
      <Breadcrumbs breadcrumbs={mockedBreadcrumbs} />,
    );

    const elementText = getByText('Mario Bros');

    expect(elementText).toBeInTheDocument();
  });
});
