import { render } from '@testing-library/react';
import Credits from '../../../../components/footer/credits/Credits';

describe('Credits component', () => {
  it('should be showing the copyright', () => {
    const { getByAltText } = render(<Credits />);

    const imageElement = getByAltText('Check');

    expect(imageElement).toBeInTheDocument();
  });
});
