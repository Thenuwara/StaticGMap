import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';

function App() {
  console.log('kkkkkkkkkkkkkk', process.env.REACT_APP_GAPI_KEY)
  return (
    <div className="App">
      <StaticGoogleMap size="600x600" apiKey={process.env.REACT_APP_GAPI_KEY}>
        <Marker
          location={{ lat: 40.737102, lng: -73.990318 }}
          color="blue"
          label="P"
        />
        <Path
          points={[
            '40.737102,-73.990318',
            '40.749825,-73.987963',
            '40.752946,-73.987384',
            '40.755823,-73.986397',
          ]}
        />
      </StaticGoogleMap>
    </div>
  );
}

export default App;
