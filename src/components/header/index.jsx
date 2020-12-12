import React, { Component } from 'react';
import './style.scss';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <a href="https://www.alltrails.com/" className="logo">
          <img src={logo} alt="AllTrails logo" />
          at Lunch
        </a>
        <nav>
          <button>Filter</button>
          <div>Find field</div>
        </nav>
      </header>
    );
  }
}
export default Header;
