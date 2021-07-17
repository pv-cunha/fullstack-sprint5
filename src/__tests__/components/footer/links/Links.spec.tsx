import { render } from '@testing-library/react';
import Links from '../../../../components/footer/links/Links';

describe('Link component', () => {
  it('should be showing the links', () => {
    const { getByText, getByAltText } = render(<Links />);

    const imageElement = getByAltText('Atendimento');
    const elementText = getByText('Cartão Riachuelo');

    expect(elementText).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
