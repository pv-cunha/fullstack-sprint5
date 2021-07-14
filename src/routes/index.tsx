import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound';
import Product from '../pages/Product/Product';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/product/:id" component={Product} />
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};

export default Router;
