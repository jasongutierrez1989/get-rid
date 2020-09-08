import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = (props) => {
  return (
        <Router>
          <div>
           <Navbar />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      );
    };

export default App;
