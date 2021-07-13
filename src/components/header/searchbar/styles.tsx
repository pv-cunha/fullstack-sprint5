import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  color: #d3d3d3;

  border-radius: 4px;
  border: 1px solid #eee;

  width: 100%;
  max-width: 80rem;

  padding: 0 0.5rem;
  margin: 0.5rem auto 0 auto;

  display: flex;
  align-items: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: #333;
  }
`;

export const Input = styled.input`
  display: block;

  width: 100%;

  border: none;

  padding: 0.5rem;

  font-size: 1rem;
  line-height: 1.75;

  &::placeholder {
    color: #d3d3d3;
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;

export const InputSVG = styled.img`
  fill: #d3d3d3;

  height: 25px;
  width: 25px;

  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;
