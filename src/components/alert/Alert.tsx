import React from 'react';
import styles from './Alert.module.css';

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
          <p key={alert.id} className={styles.alert}>
            {alert.text}
          </p>
        ))}
    </div>
  );
};

export default Alert;
