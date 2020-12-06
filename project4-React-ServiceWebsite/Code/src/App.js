import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import React, { useState, createContext } from 'react';

import Header from './component/Header/header';
import LandingPage from './pages/LandingPage';
import Footer from './component/footer/footer';
import ProfilePage from './pages/Profile/Profile';
import ServicesPage from './pages/servicesPage/services';
import ServicePage from './pages/ServicePage/ServicePage';
import LoginPage from './pages/login/loginPage';
import { LoginContext } from './LoginContext';
function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <nav>
      <Router>
        <LoginContext.Provider value={{ isLogIn, setIsLogIn }}>
          <Header />
          <Route path='/' component={LandingPage} exact />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/service/:slug' component={ServicePage} />
          <Footer />
        </LoginContext.Provider>
      </Router>
    </nav>
  );
}

export default App;
