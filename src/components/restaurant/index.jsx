import React, { Component } from "react";
import RestaurantCard from "../../components/restaurantCard";
import "./style.scss";
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.setSelectedRestaurant(
      this.props.restaurant.json_result_object.place_id
    );
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <RestaurantCard restaurant={this.props.restaurant} />
      </div>
    );
  }
}

export default Restaurant;
