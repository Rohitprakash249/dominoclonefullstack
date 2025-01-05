import { useNavigate } from "react-router-dom";
import FormToAddAddress from "../AddressComponents/FormToAddAddress";

const {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} = require("react-leaflet");

export default function Map({ mapPosition, toSetMapPosition }) {
  console.log(mapPosition);
  return (
    // <div className="h-svh w-[100%]">
    <MapContainer
      className="h-[70%]"
      center={[28.4595, 77.0266]}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={mapPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <ChangeCenter position={mapPosition} />
      <DetectClick toSetMapPosition={toSetMapPosition} />
    </MapContainer>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick({ toSetMapPosition }) {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      const latitude = e.latlng.lat;
      const longitude = e.latlng.lng;
      // console.log(latitude, longitude);
      toSetMapPosition([latitude, longitude]);
    },
  });
}
