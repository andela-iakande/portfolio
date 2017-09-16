import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/contact/ContactPage';
import ProductsPage from './components/products/ProductsPage';

export default ( 
    <Route path = "/" component= {App}>
      <IndexRoute component = {HomePage} />
      <Route path = "/contact" component = {AboutPage}/>
      <Route path = "/products" component = {ProductsPage}/>
    </Route>         
);