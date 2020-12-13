import React, { Component } from "react";
import "./style.scss";
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";

class RestaurantCard extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://4fi8v2446i0sw2rpq2a3fg51-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/About_PhotoBanners_344x361.jpg" />
        <div className="restaurantInfo">
          <h4>{this.props.restaurant.json_result_object.name}</h4>
          <p className="rating">
            <span className="stars">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </span>
            <span className="votes">(123)</span>
          </p>
          <p>
            <span className="dollars">$$</span> &#183;{" "}
            <span className="notes">Supporting text</span>
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

export default RestaurantCard;
