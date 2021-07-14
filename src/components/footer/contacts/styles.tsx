import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 1rem;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.p`
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  font-size: 0.8125rem;
`;

export const ContactInput = styled.input`
  height: 1.5rem;

  border: none;
  border-bottom: 1px solid rgba(38, 30, 30, 0.42);
  outline: none;
  width: 16rem;

  line-height: 24px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #000;

  margin: 0.5rem 0;

  &:hover,
  &:focus {
    border-bottom: 2px solid #261e1e;
  }

  &::placeholder {
    font-style: italic;
    opacity: 42%;
    font-weight: 600;
  }
`;

export const ContactButton = styled.button`
  margin-left: 1.25rem;

  color: rgba(0, 0, 0, 0.26);

  background-color: rgba(0, 0, 0, 0.12);

  border-radius: 4px;
  border: none;

  padding: 0.625rem 1.25rem;

  @media (max-width: 48rem) {
    margin: 0.5rem 0;
  }
`;

export const ContactButtonText = styled.span`
  font-size: 0.8125rem;
  text-transform: uppercase;
`;

export const ContactMessage = styled.p`
  font-size: 0.9375rem;
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const ContactApps = styled.div`
  margin: 0.5rem 0;
`;

export const ContactImage = styled.img`
  width: 110px;
  margin-left: 8px;
`;
