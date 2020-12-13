import RestaurantComponent from "../../components/restaurantComponent";
import { FaMapMarker } from "react-icons/fa";
import "./style.scss";

const ShowMarkerComponent = ({
  isHighlighted,
  restaurant,
  setSelectedRestaurant,
}) => {
  const handleClick = (event) => {
    setSelectedRestaurant(restaurant.json_result_object.place_id);
  };
  return isHighlighted ? (
    <div className="marker green">
      <FaMapMarker />
      <RestaurantComponent key={restaurant.place_id} restaurant={restaurant} />
    </div>
  ) : (
    <div className="marker" onClick={handleClick}>
      <FaMapMarker />
    </div>
  );
};

export default ShowMarkerComponent;