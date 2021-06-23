import React from 'react';
import './map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const position = [32.208753, -80.746100]

const LeafletMap = () => {
    return (
        <MapContainer className='map-container' 
        center={position} 
        zoom={12} 
        scrollWheelZoom={true} 
        >

        <TileLayer

            url=  {'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
            attribution= {'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}
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


