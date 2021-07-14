import React from 'react';
import {
  Wrapper,
  LinksStyled,
  LinksContacts,
  Column,
  LinkIcon,
  LinkIconImg,
  LinkIconText,
  LinksSeparator,
  LinkList,
  CompanyLinks,
  CompanyLinksTitle,
  CompanyLinksItem,
  CompanyLinksText,
} from './styles';

const Links: React.FC = () => {
  return (
    <Wrapper>
      <LinksStyled>
        <LinksContacts>
          <Column>
            <LinkIcon href="#url">
              <LinkIconImg src="assets/ico-attendance.svg" alt="Atendimento" />
              <LinkIconText>Atendimento</LinkIconText>
            </LinkIcon>
            <LinkIcon href="#url">
              <LinkIconImg
                src="assets/ico-faq.svg"
                alt="Perguntas Frequentes"
              />
              <LinkIconText>Perguntas Frequentes</LinkIconText>
            </LinkIcon>
          </Column>
          <Column>
            <LinkIcon href="#url">
              <LinkIconImg
                src="assets/ico-invoice-and-statement.svg"
                alt="Fatura e Extrato"
              />
              <LinkIconText>Fatura e Extrato</LinkIconText>
            </LinkIcon>
            <LinkIcon href="#url">
              <LinkIconImg
                src="assets/ico-work-with-us.svg"
                alt="Trabalhe Conosco"
              />
              <LinkIconText>Trabalhe Conosco</LinkIconText>
            </LinkIcon>
          </Column>
        </LinksContacts>
        <LinksSeparator />
        <LinkList>
          <CompanyLinks>
            <CompanyLinksTitle>Cartão Riachuelo</CompanyLinksTitle>
            <ul>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Midway Financeira
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Saiba como adquirir
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Veja sua fatura e extrato
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Buscando quitar suas dívidas?
                </CompanyLinksText>
              </CompanyLinksItem>
            </ul>
          </CompanyLinks>

          <CompanyLinks>
            <CompanyLinksTitle>Sobre a Riachuelo</CompanyLinksTitle>
            <ul>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">A Empresa</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Portal de Fornecedores
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Relação com Investidores
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Assessoria de Imprensa
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Trabalhe Conosco
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Programa Jovem Aprendiz
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Cadastro de Startups
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Mapa do Site</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Guide Shop</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Venda na Riachuelo Marketplace
                </CompanyLinksText>
              </CompanyLinksItem>
            </ul>
          </CompanyLinks>

          <CompanyLinks>
            <CompanyLinksTitle>Moda que Transforma</CompanyLinksTitle>
            <ul>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Na prática</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Entre Costuras</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Jeans Mais Transparente
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Ações Covid-19</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Free Free</CompanyLinksText>
              </CompanyLinksItem>
            </ul>
          </CompanyLinks>

          <CompanyLinks>
            <CompanyLinksTitle>Ajuda</CompanyLinksTitle>
            <ul>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">Atendimento</CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Perguntas Frequentes
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Trocas e Devoluções
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Portal da Privacidade
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Política de Privacidade
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Termos e Condições de Uso
                </CompanyLinksText>
              </CompanyLinksItem>
              <CompanyLinksItem>
                <CompanyLinksText href="#url">
                  Regras e Resultados de Sorteios
                </CompanyLinksText>
              </CompanyLinksItem>
            </ul>
          </CompanyLinks>
        </LinkList>
      </LinksStyled>
    </Wrapper>
  );
};

export default Links;
