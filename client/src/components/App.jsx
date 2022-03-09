import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NuclearHistory from './NuclearHistory';
import UW from './UW';
import Resistance from './Resistance';
import VirtualMuseum from './VirtualMuseum';
import ContactUs from './ContactUs';

const app = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/contact" component={ContactUs} />
        <Route path="/history" component={NuclearHistory} />
        <Route path="/uw" component={UW} />
        <Route path="/resistance" component={Resistance} />
        <Route path="/museum" component={VirtualMuseum} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default app;
