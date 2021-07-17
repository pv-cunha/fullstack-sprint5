import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useAlert, AlertProvider } from '../../context/AlertContext';

jest.mock('uuid', () => {
  return {
    v4: () => '1',
  };
});

describe('Alert Context', () => {
  it('should be able to alert', async () => {
    const { result } = renderHook(() => useAlert(), {
      wrapper: AlertProvider,
    });

    await waitFor(() => {
      act(() => {
        result.current.addAlert({ text: 'Alerta teste' });
      });
    });

    expect(result.current.alerts).toEqual([{ id: '1', text: 'Alerta teste' }]);
  });

  it('should be able to remove an alert', () => {
    const { result } = renderHook(() => useAlert(), {
      wrapper: AlertProvider,
    });

    act(() => {
      result.current.addAlert({ text: 'Alerta teste' });
    });

    act(() => {
      result.current.removeAlert('1');
    });

    expect(result.current.alerts).toEqual([]);
  });
});
