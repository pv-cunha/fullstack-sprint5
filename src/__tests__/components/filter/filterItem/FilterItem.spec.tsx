import { render } from '@testing-library/react';
import FilterItem from '../../../../components/filter/filterItem/FilterItem';

describe('FilterItem component', () => {
  it('should be showing a filter item', () => {
    const { getByText } = render(<FilterItem label={'label-test'} />);

    const filterText = getByText('label-test');

    expect(filterText).toBeInTheDocument();
  });
});
