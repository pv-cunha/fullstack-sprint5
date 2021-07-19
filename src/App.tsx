import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppProvider from './context';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
