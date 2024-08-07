import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

//Default marker icon issue
// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapPin() {
    const position = [44.81585, 20.460497];

    return (
        <div style={{height: '400px', width: '100%', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <MapContainer center={position} zoom={13} style={{height: '100%', width: '100%'}}>
            <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             />
            <Marker position={position}>
                <Popup>
                💯New Store Location!
                </Popup>
            </Marker>
        </MapContainer>

        </div>
    )
}

export default MapPin;