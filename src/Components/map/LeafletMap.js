import React from 'react';
import './map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import provider from './sm-providers'


const position = [32.208753, -80.746100]


const LeafletMap = () => {
    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={true} style={{height: '500px'}}>
        <TileLayer
  
        //    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    
          url={provider.maptiler.url}
          attribution={provider.maptiler.attribution}
        />
        <Marker position={position} >
      <Popup>
        15 Jarvis Creek Lane
      </Popup>
    </Marker>

  </MapContainer>
    );
}

export default LeafletMap;


