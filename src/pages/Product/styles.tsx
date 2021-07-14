import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const ImageContainer = styled.div`
  margin-right: 1rem;

  width: 100%;
  max-width: 20rem;

  img {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 32rem;

  h2 {
    width: 100%;
    max-width: 26rem;

    font-size: 1.7rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Size = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 2rem;
  margin-top: 1rem;

  width: 100%;
  max-width: 26rem;

  box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);

  span {
    color: #d0403d;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const colors = {
  red: '#d0403d',
  green: '#008844',
};

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem 1.1rem;
  margin-top: 1rem;

  border: none;
  border-radius: 0.25rem;

  text-transform: uppercase;

  color: #fff;
  font-size: 1rem;

  background: ${({ color }) => (color === 'red' ? colors.red : colors.green)};

  cursor: pointer;
`;
