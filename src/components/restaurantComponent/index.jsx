import React, { Component } from "react";
import "./style.scss";
import { FaRegHeart, FaStar } from "react-icons/fa";

class RestaurantComponent extends Component {

  render() {
    const dollarSigns = "$".repeat(this.props.restaurant.json_result_object.price_level);

    return (
      <div className="card">
        <img src={this.props.restaurant.photos[1].photo_url} alt="restaurant"/>
        <div className="restaurantInfo">
          <h4>{this.props.restaurant.json_result_object.name}</h4>
          <div className="rating">
            <span className="stars gold">
              {this.props.restaurant.json_result_object.rating}
              <FaStar />
            </span>
            <span className="votes">({this.props.restaurant.json_result_object.user_ratings_total})</span>
          </div>
          <p>
            <span className="dollars">{dollarSigns}</span>
            &#183;
            <span className="notes">{this.props.restaurant.json_result_object.formatted_address}</span>
          </p>
        </div>
        <div className="favorite">
          <FaRegHeart />
        </div>
      </div>
    );
  }
}

export default RestaurantComponent;
