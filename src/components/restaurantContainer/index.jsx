import React, { Component } from 'react';
import Restaurant from '../../components/restaurant';
import './style.scss';

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      restaurants: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            restaurants: result.restaurants
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="restaurantContainer">
        {this.state.restaurants.map(restaurant => (
          <Restaurant restaurant={restaurant} />
        ))}
      </div>
    )
  }
};

export default RestaurantContainer;
