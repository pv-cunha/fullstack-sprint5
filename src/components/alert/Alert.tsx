import React from 'react';
import { AlertMessage } from './styles';

interface AlertContainerProps {
  alertMessages: AlertProps[];
}

interface AlertProps {
  id: string;
  text: string;
  time?: number;
}

const Alert: React.FC<AlertContainerProps> = ({ alertMessages }) => {
  return (
    <div>
      {alertMessages.length > 0 &&
        alertMessages.map((alert) => (
          <AlertMessage key={alert.id}>{alert.text}</AlertMessage>
        ))}
    </div>
  );
};

export default Alert;
