import React from 'react';
import { v4 } from 'uuid';
import Alert from '../components/alert/Alert';

interface AlertContextData {
  addAlert: (messages: Omit<AlertMessage, 'id'>) => void;
  removeAlert: (id: string) => void;
  alerts: AlertMessage[];
}

export interface AlertMessage {
  id: string;
  text: string;
  time?: number;
}

const AlertContext = React.createContext<AlertContextData>(
  {} as AlertContextData,
);

const AlertProvider: React.FC = ({ children }) => {
  const [alerts, setAlerts] = React.useState<AlertMessage[]>([]);

  const addAlert = React.useCallback(
    ({ text, time = 1000 }: Omit<AlertMessage, 'id'>) => {
      const id = v4();

      const alert = { id, text };

      setAlerts((state) => [...state, alert]);

      setTimeout(() => removeAlert(alert.id), time);
    },
    // eslint-disable-next-line
    [],
  );

  const removeAlert = React.useCallback((id: string) => {
    setAlerts((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <AlertContext.Provider value={{ addAlert, removeAlert, alerts }}>
      {children}
      <Alert alertMessages={alerts} />
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const context = React.useContext(AlertContext);

  return context;
};

export { AlertProvider, useAlert };
