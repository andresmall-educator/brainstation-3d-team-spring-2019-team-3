import React from 'react';
import MainPage from '../src/components/MainPage/MainPage';

import '../src/global-styles.scss';

import { 
  BrowserRouter, 
  Switch, 
  Route, } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { MainPage } />
        <Route path = '/:id' component = { MainPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

