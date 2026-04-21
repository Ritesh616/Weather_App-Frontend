import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ lat, lon, city }) => {
  if (!lat || !lon) return null;

  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden">
      <MapContainer center={[lat, lon]} zoom={10} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[lat, lon]}>
          <Popup>📍 {city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;