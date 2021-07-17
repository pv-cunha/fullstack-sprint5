import { render } from '@testing-library/react';
import Alert from '../../../components/alert/Alert';

const mockedAlertMessage = [
  { id: 'alert-id', text: 'Alert' },
  { id: 'alert-id-2', text: 'Alert-2' },
];

describe('Alert component', () => {
  it('should be showing an alert message', () => {
    const { getByText } = render(<Alert alertMessages={mockedAlertMessage} />);

    const alertText = getByText('Alert');
    const alert2Text = getByText('Alert-2');

    expect(alertText).toBeInTheDocument();
    expect(alert2Text).toBeInTheDocument();
  });
});
