import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import React, { useState, createContext, useEffect } from 'react';

import Header from './component/Header/header';
import LandingPage from './pages/LandingPage';
import Footer from './component/footer/footer';
import ProfilePage from './pages/Profile/Profile';
import ServicesPage from './pages/servicesPage/services';
import ServicePage from './pages/ServicePage/ServicePage';
import LoginPage from './pages/login/loginPage';
import { LoginContext } from './LoginContext';
import BrokenPage from './pages/BrokenPage/BrokenPage'
import NotFound from './pages/notfound/NotFound'
function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(()=>{
    if (sessionStorage.getItem('islogin') === 'false' || !sessionStorage.getItem('islogin')) {
      setIsLogIn(false);
    }
    else{
      setIsLogIn(true);
    }
  },[isLogIn])
  return (
    <nav>
      <Router>
        <LoginContext.Provider value={{ isLogIn, setIsLogIn }}>
          <Header />
          <Switch >
          <Route path='/' component={  LandingPage  } exact />
          <Route path='/profile' component={ isLogIn ? ProfilePage : BrokenPage} />
          <Route path='/services' component={isLogIn ? ServicesPage : BrokenPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/service/:slug' component={ isLogIn ? ServicePage : BrokenPage} />
          <Route path='*' component={NotFound} />
          </Switch>
          <Footer />
        </LoginContext.Provider>
      </Router>
    </nav>
  );
}

export default App;
