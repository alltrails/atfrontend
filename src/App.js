import './App.scss';
import Header from './components/header';
import RestaurantContainer from './components/restaurantContainer';
import Map from './components/map';

function App() {
  return (
    <div className="App">
        <Header />
      <div className="content">
        <RestaurantContainer />
        <Map />
      </div>
    </div>
  );
}

export default App;
