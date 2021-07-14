import React from 'react';
import {
  Wrapper,
  Contact,
  ContactInfo,
  ContactInput,
  ContactButton,
  ContactButtonText,
  ContactForm,
  ContactMessage,
  ContactApps,
  ContactImage,
} from './styles';

const Contacts: React.FC = () => {
  return (
    <Wrapper>
      <Contact>
        <ContactInfo>Receba ofertas e novidades por e-mail</ContactInfo>
        <ContactForm>
          <ContactInput type="email" placeholder="Digite aqui seu e-mail" />
          <ContactButton type="submit">
            <ContactButtonText>Cadastrar</ContactButtonText>
          </ContactButton>
        </ContactForm>
        <ContactMessage>Baixe nosso App</ContactMessage>
        <ContactApps>
          <a href="#url">
            <ContactImage src="assets/google-play.webp" alt="Google Play" />
          </a>
          <a href="#url">
            <ContactImage src="assets/app-store.webp" alt="App Store" />
          </a>
        </ContactApps>
      </Contact>
    </Wrapper>
  );
};

export default Contacts;
