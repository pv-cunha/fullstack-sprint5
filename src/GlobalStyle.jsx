import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  color: #261e1e;
  background-color: #fff;

  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.43;

  padding-top: 10rem;

  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 500;
}

a {
  color: #333;
  text-decoration: none;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
