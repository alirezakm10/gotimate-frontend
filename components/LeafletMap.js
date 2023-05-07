import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMarker from '@/public/location-marker.svg';


const LeafletMap = () => {
  const customMarkerIcon = new L.Icon({
    iconUrl: customMarker,
    iconSize: [32, 32],
  });
  return (
    <MapContainer
      center={[35.72550, 51.38623]}
      zoom={17}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />
      <Marker position={[35.72550, 51.38623]} icon={customMarkerIcon} />
    </MapContainer>
  );
};

export default LeafletMap;
