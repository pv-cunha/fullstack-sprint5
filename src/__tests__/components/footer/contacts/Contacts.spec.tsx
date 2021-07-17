import { render } from '@testing-library/react';
import Contacts from '../../../../components/footer/contacts/Contacts';

describe('Contacts component', () => {
  it('should be showing the contacts way', () => {
    const { getByAltText, getByText } = render(<Contacts />);

    const imageElement = getByAltText('Google Play');
    const textElement = getByText('Cadastrar');

    expect(imageElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
