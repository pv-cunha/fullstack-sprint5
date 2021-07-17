import { render } from '@testing-library/react';
import BreadcrumbsItem from '../../../../components/breadcrumbs/breadcrumbsItems/BreadcrumbsItem';

const mockedBreadcrumb = { link: 'breadcrumb-link', name: 'breadcrumb-name' };

describe('BreadcrumbsItem component', () => {
  it('should be showing a breadcrumb', () => {
    const { getByText } = render(
      <BreadcrumbsItem breadcrumb={mockedBreadcrumb} active={true} />,
    );

    const breadcrumbText = getByText('breadcrumb-name');

    expect(breadcrumbText).toBeInTheDocument();
  });
});
