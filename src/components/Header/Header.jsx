import React from 'react';
import logo from '../../images/vectorpaint.png'
import github from '../../images/github.png'

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import headerStyles from './header.module.scss';




const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <Navbar className="navbar navbar-light navbar-expand-lg navbar-static-top sticky-header">
        <Navbar.Header>
          <Navbar.Brand className="navbar-header">
            <a className="navbar-brand" href="/">
            <img src={logo} alt='Gatsby Logo' />
            </a>
          </Navbar.Brand>
          <Nav className="navbar-nav ml-auto">
            <a className="dropdown nav-item nav-link" key="1" href="https://github.com/pipes">
              <img className="navbar-icon github-icon" src={github} alt="GitHub" />
            </a>
          
            <a className="dropdown nav-item nav-link" key="2" href="mailto:hello@pipesdata.com">
              <i className="navbar-icon material-icons">
                email
              </i>
            </a>
          </Nav>
        </Navbar.Header>
      </Navbar>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
