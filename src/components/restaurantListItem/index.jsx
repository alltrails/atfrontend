import React, { Component } from "react";
import RestaurantComponent from "../../components/restaurantComponent";
import "./style.scss";
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";

class RestaurantListItem extends Component {
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
      <div className="restaurantListItem" onClick={this.handleClick}>
        <RestaurantComponent restaurant={this.props.restaurant} />
      </div>
    );
  }
}

export default RestaurantListItem;
