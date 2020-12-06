import React, { useContext, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from '../../img/cover.png';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { LoginContext } from '../../LoginContext';
export default function Header() {
  // const [isLogIn, setIsLogIn] = useState(sessionStorage.getItem("isLogin"));
  const { isLogIn, setIsLogIn } = useContext(LoginContext);
  return (
    <header className='navbar navbar-expand-sm navbar-dark'>
      <div className='container'>
        <Navbar.Brand href='#home'>
          <Link to='/'>
            <img
              src={logo}
              height='60'
              className='d-inline-block '
              alt='PCR logo'
            />
          </Link>
        </Navbar.Brand>
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            {isLogIn ? (
              <>
                <LinkContainer to='/services'>
                  <li className='nav-item'>Services</li>
                </LinkContainer>
                <LinkContainer to='/profile'>
                  <li className='nav-item'>Profile</li>
                </LinkContainer>
                <LinkContainer to='/'>
                  <li
                    onClick={() => {
                      sessionStorage.clear();
                      sessionStorage.setItem('islogin', false);
                      setIsLogIn(false);
                    }}
                    className='nav-item'
                  >
                    Logout
                  </li>
                </LinkContainer>
              </>
            ) : (
              <LinkContainer to='/login'>
                <li className='nav-item'>Log in / Register</li>
              </LinkContainer>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

/*
add to index.html

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
 
*/

//npm install react-router-dom
//npm install -S react-router-bootstrap
