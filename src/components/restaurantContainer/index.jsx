import React, { Component } from "react";

import RestaurantListItem from "../../components/restaurantListItem";
import "./style.scss";

class RestaurantContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="restaurantContainer">
        {this.props.restaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.place_id}
            restaurant={restaurant}
            setSelectedRestaurant={this.props.setSelectedRestaurant}
          />
        ))}
      </div>
    );
  }
}

export default RestaurantContainer;
