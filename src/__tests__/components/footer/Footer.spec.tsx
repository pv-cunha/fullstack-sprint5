import { render } from '@testing-library/react';
import Footer from '../../../components/footer/Footer';

describe('Footer component', () => {
  it('should be showing the footer', () => {
    const { getByPlaceholderText, getByText, getByAltText } = render(
      <Footer />,
    );

    const inputElement = getByPlaceholderText('Digite aqui seu e-mail');
    const textElement = getByText('Cartão Riachuelo');
    const imageElement = getByAltText('App Store');

    expect(inputElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
