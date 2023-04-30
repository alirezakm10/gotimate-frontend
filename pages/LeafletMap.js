import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const LeafletMap = () => {

  return (
    <MapContainer
      center={[35.72550, 51.38623]}
      zoom={17}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />
      <Marker position={[35.72550, 51.38623]} ></Marker>
    </MapContainer>
  );
};

export default LeafletMap;
