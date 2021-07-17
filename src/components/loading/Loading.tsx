import React from 'react';
import { Overlay, Spinner } from './styles';

const Loading: React.FC = () => {
  return (
    <Overlay>
      <Spinner data-testid="loading-spinner"></Spinner>
    </Overlay>
  );
};

export default Loading;
