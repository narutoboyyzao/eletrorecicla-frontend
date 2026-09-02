import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { approvedCompanyDemo } from '../data/backendDemo';

const markerIcon = L.divIcon({
  className: 'eletro-marker-wrapper',
  html: '<div class="eletro-marker"><span></span></div>',
  iconSize: [38, 46], iconAnchor: [19, 44], popupAnchor: [0, -42],
});

export default function MapView({ compact = false }) {
  const center = [approvedCompanyDemo.latitude, approvedCompanyDemo.longitude];
  return <div className={`map-shell ${compact ? 'map-compact' : ''}`}>
    <MapContainer center={center} zoom={compact ? 11 : 12} scrollWheelZoom className="leaflet-map">
      <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center} icon={markerIcon}>
        <Popup><strong>{approvedCompanyDemo.razaoSocial}</strong><br/>{approvedCompanyDemo.endereco}<br/><small>Dados de demonstração do backend</small></Popup>
      </Marker>
    </MapContainer>
    <span className="demo-chip">demonstração • backend atual</span>
  </div>
}
