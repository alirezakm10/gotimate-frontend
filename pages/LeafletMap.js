import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

const LeafletMap = () => {
  const CustomMarkerIcon = L.icon({
    iconUrl: 'https://www.gov.br/mre/pt-br/consulado-bruxelas/pin.png/@@images/1592a7e9-c806-4c61-8d86-5455ad76f496.png',
    iconSize: [40, 40],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
    className: 'custom-marker-icon', // You can add custom CSS classes here
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
      <Marker position={[35.72550, 51.38623]} icon={CustomMarkerIcon} ></Marker>
    </MapContainer>
  );
};

export default LeafletMap;
