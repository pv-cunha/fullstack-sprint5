import { render } from '@testing-library/react';
import Loading from '../../../components/loading/Loading';

describe('Loading component', () => {
  it('should be showing an loading spinner', () => {
    const { getByTestId } = render(<Loading />);

    const loadingElement = getByTestId('loading-spinner');

    expect(loadingElement).toBeInTheDocument();
  });
});
