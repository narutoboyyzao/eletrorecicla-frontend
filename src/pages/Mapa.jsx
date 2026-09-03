import { Clock3, LocateFixed, MapPin, Navigation, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import PageHeading from '../components/PageHeading'
import { pontosColetaMock } from '../data/mockData'

function FocusPoint({ point }) {
  const map = useMap()
  useEffect(() => {
    if (point) map.flyTo([point.latitude, point.longitude], 14)
  }, [map, point])
  return null
}

export default function Mapa() {
  const [selected, setSelected] = useState(pontosColetaMock[0])

  return <div className="page page-wide"><PageHeading eyebrow="Pontos de coleta em Barueri" title="Encontre um local próximo" description="Explore Barueri e selecione um marcador demonstrativo para consultar as informações." /><div className="map-layout"><MapContainer center={[-23.5112, -46.8765]} zoom={13} scrollWheelZoom><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{pontosColetaMock.map(point => <Marker key={point.id} position={[point.latitude, point.longitude]} eventHandlers={{ click: () => setSelected(point) }}><Popup><strong>{point.razaoSocial}</strong><br />Barueri, SP<br /><button className="btn btn-link p-0" onClick={() => setSelected(point)}>Ver informações</button></Popup></Marker>)}<FocusPoint point={selected} /></MapContainer><div className="map-search surface"><input className="form-control" aria-label="Buscar endereço em Barueri" placeholder="Busque um endereço em Barueri" /><button className="btn-eco" type="button"><Search size={18} /><span className="d-none d-sm-inline">Buscar</span></button><button className="btn-outline-eco" type="button" title="Usar minha localização"><LocateFixed size={18} /></button></div>{selected && <aside className="map-panel surface"><span className="mock-label">Ponto demonstrativo</span><p className="point-status mt-3 mb-0">Ponto aprovado</p><h2 className="point-title">{selected.razaoSocial}</h2><div className="detail-row"><MapPin size={19} /><div><strong>Região</strong>{selected.endereco}</div></div><div className="detail-row"><Navigation size={19} /><div><strong>Distância</strong>{selected.distancia}</div></div><div className="detail-row"><Clock3 size={19} /><div><strong>Horário de funcionamento</strong>{selected.horario}</div></div><div className="map-hint"><strong>Dados ilustrativos</strong><br />Os endereços, horários e materiais reais serão fornecidos pela API do backend.</div></aside>}</div></div>
}
