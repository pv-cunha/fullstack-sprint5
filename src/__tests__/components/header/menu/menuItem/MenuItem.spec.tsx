import { render } from '@testing-library/react';
import MenuItem from '../../../../../components/header/menu/menuItem/MenuItem';

describe('MenuItem component', () => {
  it('Should be showing a menuItem', () => {
    const { getByText } = render(
      <MenuItem category={{ label: 'menu-test', link: 'link-test' }} />,
    );

    const menuText = getByText('menu-test');

    expect(menuText).toBeInTheDocument();
  });
});
