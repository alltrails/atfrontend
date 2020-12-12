import React, { Component } from 'react';
import './style.scss';
import logo from './logo.svg';

// TODO: add label and add name/id for input
// TODO: add magnifying glass icon on a button at the end of the search field if enough time at the end
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
          <input type="text" placeholder="Search for a restaurant"></input>
        </nav>
      </header>
    );
  }
}
export default Header;
