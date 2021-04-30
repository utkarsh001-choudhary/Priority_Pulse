import React from 'react';
import GoogleMapReact from 'google-map-react'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

  function Mapp(){
     
    
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat:19.0760,
          lng:72.8777,
      }
     return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
     
      <div className="google-map">
        <GoogleMapReact
           bootstrapURLKeys={ {key: 'AIzaSyCjmO27G0-IILtOxth-H6EDM8fLUimm-lY' }}
          defaultCenter={location}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
        }
export default Mapp;