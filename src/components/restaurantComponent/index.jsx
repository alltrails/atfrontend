import React, { Component } from "react";
import "./style.scss";
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";

class RestaurantComponent extends Component {

  render() {
    const dollarSigns = "$".repeat(this.props.restaurant.json_result_object.price_level);

    return (
      <div className="card">
        <img src="https://4fi8v2446i0sw2rpq2a3fg51-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/About_PhotoBanners_344x361.jpg" />
        <div className="restaurantInfo">
          <h4>{this.props.restaurant.json_result_object.name}</h4>
          <p className="rating">
            <span className="stars gold">
              {this.props.restaurant.json_result_object.rating}
              <FaStar />
            </span>
            <span className="votes">({this.props.restaurant.json_result_object.user_ratings_total})</span>
          </p>
          <p>
            <span className="dollars">{dollarSigns}</span>
            &#183;
            <span className="notes">{this.props.restaurant.json_result_object.formatted_address}</span>
          </p>
        </div>
        <div className="favorite">
          <a href="#">
            <FaRegHeart />
          </a>
        </div>
      </div>
    );
  }
}

export default RestaurantComponent;
