import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import AOS from 'aos';

import { Home } from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import './App.scss';
import { ViewportProvider } from './utils/useViewport';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

AOS.init();

const App = () => {
  return (
    <ViewportProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ViewportProvider>
  );
}

export default App;
