import styled from 'styled-components';

export const ListBtn = styled.button`
  border: none;
  border-radius: 4px;

  padding: 12px 10px;

  min-width: 64px;

  background: #fff;

  cursor: pointer;

  transition: background 0.2s;

  display: flex;

  &:hover {
    background: #eee;
  }
`;

export const ListName = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  line-height: 1.75;
`;

export const ListImg = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;

  margin-left: 0.5rem;
`;
