import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Stats from './pages/Stats';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/News' component={News} />
          <Route path='/Stats' component={Stats} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
