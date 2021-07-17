import { render } from '@testing-library/react';
import Payment from '../../../../components/footer/payments/Payment';

describe('Payment component', () => {
  it('should be showing the payment alternatives', () => {
    const { getByText } = render(<Payment />);

    const elementText = getByText('Formas de Pagamento');
    const element2Text = getByText('CASA RCHLO');

    expect(elementText).toBeInTheDocument();
    expect(element2Text).toBeInTheDocument();
  });
});
