import React, { Component } from 'react';
import Restaurant from '../../components/restaurant';
import './style.scss';

class RestaurantContainer extends Component {
  render() {
    return (
      <div className="restaurantContainer">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    )
  }
};

export default RestaurantContainer;
