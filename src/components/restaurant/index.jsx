import React, { Component } from 'react';
import './style.scss';

class Restaurant extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://4fi8v2446i0sw2rpq2a3fg51-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/About_PhotoBanners_344x361.jpg" />
        <div className="restaurantInfo">
          <h4>Restaurant name</h4>
          <p><span className="stars">stars</span><span className="votes">(123)</span></p>
          <p><span className="dollars">$$</span> &#183; <span className="notes">Supporting text</span></p>
        </div>
        <div className="favorite">heart</div>
      </div>
    )
  }
};

export default Restaurant;
