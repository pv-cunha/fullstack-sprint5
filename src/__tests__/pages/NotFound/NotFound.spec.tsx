import { render } from '@testing-library/react';
import NotFound from '../../../pages/NotFound/NotFound';

jest.mock('react-router-dom', () => {
  return { Link: ({ children }: { children: React.ReactNode }) => children };
});

describe('NotFound page', () => {
  it('should be showing the not found page', () => {
    const { getByText } = render(<NotFound />);

    const textElement = getByText(
      'Clique na imagem acima para voltar para nossa Home !!',
    );

    expect(textElement).toBeInTheDocument();
  });
});
