import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #f6f6f6;
  margin-top: 40px;
`;

export const LinksStyled = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const LinksContacts = styled.div`
  width: 30%;
  display: flex;

  @media (max-width: 48rem) {
    width: 100%;

    margin-bottom: 1rem;
  }

  @media (min-width: 48rem) and (max-width: 75rem) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Column = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const LinkIcon = styled.a`
  text-align: center;
`;

export const LinkIconImg = styled.img`
  display: block;
  margin: auto;
  width: 25px;
`;

export const LinkIconText = styled.p`
  padding: 0.5rem;
  font-size: 0.8125rem;
  white-space: pre-line;
`;

export const LinksSeparator = styled.hr`
  width: 1px;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 3.125rem;
  list-style: none;

  ul {
    list-style: none;
  }

  @media (max-width: 48rem) {
    padding: 0.2rem;
    justify-content: start;

    width: 100%;
  }
`;

export const CompanyLinks = styled.li`
  flex-grow: 1;
  margin-left: 8px;
  margin-right: 8px;
`;

export const CompanyLinksTitle = styled.h3`
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export const CompanyLinksItem = styled.li`
  padding-top: 8px;
`;

export const CompanyLinksText = styled.a`
  line-height: 25px;
  font-size: 0.6875rem;
  font-weight: 400;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;
