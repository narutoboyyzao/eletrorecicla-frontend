import { AlertCircle, LocateFixed, MapPin, Phone, RefreshCw, Search } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import PageHeading from '../components/PageHeading'
import { listarEmpresas } from '../services/eletroRecicla'

function FocusPoint({ point }) {
  const map = useMap()
  useEffect(() => {
    if (point) map.flyTo([point.latitude, point.longitude], 14)
  }, [map, point])
  return null
}

export default function Mapa() {
  const [points, setPoints] = useState([])
  const [selected, setSelected] = useState(null)
  const [status, setStatus] = useState('loading')

  const loadPoints = useCallback(async () => {
    try {
      const empresas = await listarEmpresas()
      const validPoints = empresas
        .filter(({ status: companyStatus, latitude, longitude }) =>
          companyStatus?.toUpperCase() === 'APROVADA' && Number.isFinite(Number(latitude)) && Number.isFinite(Number(longitude)))
        .map(company => ({ ...company, latitude: Number(company.latitude), longitude: Number(company.longitude) }))
      setPoints(validPoints)
      setSelected(validPoints[0] ?? null)
      setStatus('ready')
    } catch {
      setPoints([])
      setSelected(null)
      setStatus('error')
    }
  }, [])

  // A consulta inicial sincroniza a tela com o cadastro de empresas do backend.
  // oxlint-disable-next-line react/set-state-in-effect
  useEffect(() => { loadPoints() }, [loadPoints])

  const retry = () => {
    setStatus('loading')
    loadPoints()
  }

  return <div className="page page-wide"><PageHeading eyebrow="Pontos de coleta em Barueri" title="Encontre um local próximo" description="Consulte no mapa as empresas aprovadas e cadastradas no EletroRecicla." /><div className="map-layout"><MapContainer center={[-23.5112, -46.8765]} zoom={13} scrollWheelZoom><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />{points.map(point => <Marker key={point.id} position={[point.latitude, point.longitude]} eventHandlers={{ click: () => setSelected(point) }}><Popup><strong>{point.razaoSocial}</strong><br />{point.endereco}<br /><button className="btn btn-link p-0" onClick={() => setSelected(point)}>Ver informações</button></Popup></Marker>)}<FocusPoint point={selected} /></MapContainer><div className="map-search surface"><input className="form-control" aria-label="Buscar endereço em Barueri" placeholder="Busque um endereço em Barueri" /><button className="btn-eco" type="button"><Search size={18} /><span className="d-none d-sm-inline">Buscar</span></button><button className="btn-outline-eco" type="button" title="Usar minha localização"><LocateFixed size={18} /></button></div>{status === 'error' && <aside className="map-panel surface"><AlertCircle size={25} /><h2 className="point-title mt-3">API indisponível</h2><p>Não foi possível consultar <code>/api/v1/empresas</code>. Verifique se o backend está ativo na porta 8080.</p><button className="btn-outline-eco" type="button" onClick={retry}><RefreshCw size={17} /> Tentar novamente</button></aside>}{status === 'ready' && !selected && <aside className="map-panel surface"><MapPin size={25} /><h2 className="point-title mt-3">Nenhum ponto disponível</h2><p>A API não retornou empresas aprovadas com latitude e longitude válidas.</p></aside>}{selected && <aside className="map-panel surface"><p className="point-status mb-0">Ponto aprovado</p><h2 className="point-title">{selected.razaoSocial}</h2><div className="detail-row"><MapPin size={19} /><div><strong>Endereço</strong>{selected.endereco}</div></div>{selected.telefone && <div className="detail-row"><Phone size={19} /><div><strong>Telefone</strong>{selected.telefone}</div></div>}<div className="map-hint"><strong>Cadastro atualizado pela API</strong><br />As informações exibidas vêm de <code>/api/v1/empresas</code>.</div></aside>}</div></div>
}
