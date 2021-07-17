import { render } from '@testing-library/react';
import Logo from '../../../../components/header/logo/Logo';

jest.mock('react-router-dom', () => {
  return { Link: ({ children }: { children: React.ReactNode }) => children };
});

describe('Logo component', () => {
  it('should be showing an logo', () => {
    const { getByText } = render(<Logo />);

    const logoText = getByText('fechar');

    expect(logoText).toBeInTheDocument();
  });
});
