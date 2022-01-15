// plugins
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Aboutus from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';
// context
import BoatState from './services/actions';

const App = () => {
  return (
    <BoatState>
      <Router>
        <div className="App">
          <Header title="Boat" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutUs" element={<Aboutus />} />
            <Route element={<NotFound />} />
          </Routes>
          <Footer company="BOAT" />
        </div>
      </Router>
    </BoatState>
  );
};

export default App;
