import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Nav from './components/partials/Nav';
import Logo from './components/partials/Logo';
import RouteComponent from './components/partials/Router';
import Footer from './components/partials/Footer';

function App() {
  return (
    <Router>
      <section className="App">
        <header className="flex">
          <Logo />
          <Nav />
        </header>
        <section>
          <div className="img-bg">
          </div>
            <RouteComponent />
        </section>
        <Footer />
      </section >
    </Router>
  );
}

export default App;