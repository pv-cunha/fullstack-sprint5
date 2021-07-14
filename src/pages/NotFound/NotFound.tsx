import React from 'react';
import { Wrapper, NotFoundImg, NotFoundText } from './styles';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <NotFoundImg src="assets/rchlo.svg" alt="Home Riachuelo" />
      </Link>
      <NotFoundText>
        Desculpe, ainda estamos desenvolvendo essa página para proporcionar um
        melhor serviço para você, nosso RchLover !!
      </NotFoundText>
      <NotFoundText>
        Clique na imagem acima para voltar para nossa Home !!
      </NotFoundText>
    </Wrapper>
  );
};

export default NotFound;
