import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 10px solid #333;
  border-right-color: transparent;
  animation: loading 1s infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;