import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/'>
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path='/products'>
            <Navbar />
            <Footer />
          </Route>
          <Route path='/installclickandconnect'>
            <Navbar />
          </Route>
          <Route path='/search'>
            <Navbar />
            <Footer />
          </Route>
          <Route path='/basket'>
            <Navbar />
            <Footer />
          </Route>
          <Route path='/product'>
            <Navbar />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
