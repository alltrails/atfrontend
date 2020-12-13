import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import RestaurantComponent from "../../components/restaurantComponent";
import ShowMarkerComponent from "../../components/showMarkerComponent";
import "./style.scss";
import { FaMapMarker } from "react-icons/fa";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 11,
  };

  render() {
    const restaurants = this.props.restaurants || [];
    //default center map on SF for demo purposes, if enough time add geolocation
    const center =
      restaurants.length > 0
        ? { lat: restaurants[0].lat, lng: restaurants[0].lng }
        : this.props.center;
    const highlightedRestaurant = restaurants.find(
      (rest) => rest.place_id === this.props.selectedRestaurant
    );

    return (
      <div className="map">
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDIKzjfQQCahwJ9yEr8gBU9TqJ3MvbPXyY",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={center}
          >
            {restaurants.map((restaurant) => (
              <ShowMarkerComponent
                key={restaurant.place_id}
                lat={restaurant.lat}
                lng={restaurant.lng}
                restaurant={restaurant}
                isHighlighted={restaurant === highlightedRestaurant}
                setSelectedRestaurant={this.props.setSelectedRestaurant}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
