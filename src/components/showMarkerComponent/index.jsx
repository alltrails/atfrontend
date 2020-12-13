import RestaurantComponent from "../../components/restaurantComponent";
import { IconContext } from "react-icons";
import { FaMapMarker } from "react-icons/fa";
import "./style.scss";

function MarkerIcon() {
  return (
    <IconContext.Provider value={{ color: "#808080", size: "2em"}}>
      <div>
        <FaMapMarker />
      </div>
    </IconContext.Provider>
  );
}

function SelectedMarkerIcon() {
  return (
    <IconContext.Provider value={{ color: "#3e8020", size: "2em" }}>
      <div>
        <FaMapMarker />
      </div>
    </IconContext.Provider>
  );
}

const ShowMarkerComponent = ({
  isHighlighted,
  restaurant,
  setSelectedRestaurant,
}) => {
  const handleClick = (event) => {
    setSelectedRestaurant(restaurant.json_result_object.place_id);
  };
  return isHighlighted ? (
    <div className="marker">
      <SelectedMarkerIcon />
      <RestaurantComponent key={restaurant.place_id} restaurant={restaurant} />
    </div>
  ) : (
    <div className="marker" onClick={handleClick}>
      <MarkerIcon />
    </div>
  );
};

export default ShowMarkerComponent;
