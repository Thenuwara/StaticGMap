import React, { useState } from 'react';
import './App.css';
import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';

function App() {

  const [location, setLocation] = useState({
    lat: 40.737102,
    lng: -73.990318
  });

  const updateLocation = () => {
    // new values
    setLocation({
      lat: 40.749825,
      lng: -73.987963
    });
  };

  return (
    <div className="App">

      <button onClick={updateLocation}>
        Update Location
      </button>

      <StaticGoogleMap size="600x600" apiKey={process.env.REACT_APP_GAPI_KEY}>
        <Marker
          location={location}
          color="blue"
          label="P"
        />
      </StaticGoogleMap>

    </div>
  );
}

export default App;
