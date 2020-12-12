import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header';
import RestaurantContainer from './components/restaurantContainer';
import Map from './components/map';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(
        (result) => {
          setRestaurants(result.restaurants || [])
        },
        (error) => {
          console.log(`something went wrong ${error}`);
        }
      )
  }, []);

  return (
    <div className="App">
      <Header setRestaurants={setRestaurants}/>
      <div className="content">
        <RestaurantContainer restaurants={restaurants}/>
        <Map />
      </div>
    </div>
  );
}

export default App;
