import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Nav';
import Footer from './components/Footer'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div>
      <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
