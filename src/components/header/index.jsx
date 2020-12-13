import React, { Component } from "react";
import "./style.scss";
import logo from "./logo.svg";
import { FaSearch } from "react-icons/fa";

// TODO: add magnifying glass icon on a button at the end of the search field if enough time at the end
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    fetch(`http://localhost:3000/restaurants?search_text=${this.state.value}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.props.setRestaurants(result.restaurants || []);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    event.preventDefault();
  }

  render() {
    return (
      <header>
        <a href="https://www.alltrails.com/" className="logo">
          <img src={logo} alt="AllTrails logo" />
          at Lunch
        </a>
        <nav>
          <button>Filter</button>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Search for a restaurant"
              />
            </label>
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </nav>
      </header>
    );
  }
}
export default Header;
