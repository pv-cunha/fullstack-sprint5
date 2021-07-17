import { render, fireEvent, waitFor } from '@testing-library/react';
import SelectSizes from '../../../components/sizes/SelectSizes';

describe('SelectSizes component', () => {
  const mockedSetSize = () => ({
    setSize: jest.fn(),
  });

  const mockedSize: number = 4;

  it('should be showing a size', () => {
    const { getByText } = render(
      <SelectSizes
        size={mockedSize}
        selectedSize={mockedSize}
        setSize={mockedSetSize}
      />,
    );

    const selectSizeText = getByText('4');

    expect(selectSizeText).toBeInTheDocument();
  });

  it('should be able to change sizes', async () => {
    const { getByTestId } = render(
      <SelectSizes
        size={mockedSize}
        selectedSize={mockedSize}
        setSize={mockedSetSize}
      />,
    );

    const buttonElement = getByTestId('button-test');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(buttonElement.textContent).toBe(String(mockedSize));
    });
  });
});
