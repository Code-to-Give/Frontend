import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";

const Map = (props) => {
  const DEFAULT_LATITUDE = 1.2838;
  const DEFAULT_LONGITUDE = 103.8591;

  // State to store the center of the map and the clicked position for the marker
  const [center, setCenter] = useState([DEFAULT_LATITUDE, DEFAULT_LONGITUDE]);
  const [markerPosition, setMarkerPosition] = useState(null); // Initially, no marker

  // Function to handle click event and update marker position
  function ClickHandler() {
    useMapEvent('click', (e) => {
      const { lat, lng } = e.latlng;

      // Update marker position state
      setMarkerPosition([lat, lng]);

      // Show a popup with latitude and longitude at the clicked position
      const popup = L.popup()
        .setLatLng(e.latlng)
        .setContent(`<p>Latitude: ${lat}<br />Longitude: ${lng}</p>`)
        .openOn(e.target); // 'e.target' is the map instance
    });
    return null; // This component doesn't render anything, it only attaches event listeners
  }

  return (
    <MapContainer
      className="leaflet-map"
      center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: "200px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Add click handler to the map */}
      <ClickHandler />
      {/* Show a marker at the clicked position, if available */}
      {markerPosition && (
          <Marker position={markerPosition} icon={icon}>
            <Popup>
              Latitude: {markerPosition[0]}<br />
              Longitude: {markerPosition[1]}
            </Popup>
          </Marker>
        )}
    </MapContainer>
  );
};

export default Map;