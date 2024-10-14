import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Cards from './Components/Card1';

function App() {
  return (
    <Router>
      <div className="font-Poppins bg-gradient-to-r from-blue-50 to-blue-100">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cards" component={Cards} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
