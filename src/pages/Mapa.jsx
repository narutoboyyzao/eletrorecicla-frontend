import { useState } from 'react';
import PageHero from '../components/PageHero';
import MapView from '../components/MapView';
import Icon from '../components/Icon';
import { approvedCompanyDemo } from '../data/backendDemo';

export default function Mapa() {
  const [selected, setSelected] = useState(true);
  return <>
    <PageHero eyebrow="MAPA / PONTOS DE COLETA" title="Encontre onde descartar." text="Explore o mapa interativo. Nesta versão, o marcador exibido usa somente o dado de demonstração já existente no backend da equipe." />
    <section className="map-page-section"><div className="container-xl">
      <div className="map-toolbar"><div className="search-field"><Icon name="search"/><input aria-label="Buscar endereço" placeholder="Busca por endereço — integração futura com Nominatim" disabled/></div><button className="location-btn" disabled><Icon name="pin"/> Usar minha localização</button></div>
      <div className="map-workspace">
        <div className="map-main"><MapView/><div className="map-note"><span className="status-dot"></span> Mapa interativo com OpenStreetMap. Busca, proximidade e geolocalização ficam preparadas para integração posterior.</div></div>
        <aside className="point-panel">
          <div className="point-panel-top"><span className="mini-label">PONTO SELECIONADO</span><button onClick={() => setSelected(!selected)} aria-label="Alternar detalhes">{selected ? '−' : '+'}</button></div>
          {selected && <><h2>{approvedCompanyDemo.razaoSocial}</h2><span className="approval-tag"><Icon name="check" size={14}/> status no backend: aprovada</span><div className="point-info"><div><span>Endereço</span><strong>{approvedCompanyDemo.endereco}</strong></div><div><span>Horário de funcionamento</span><strong>Aguardando dado real</strong></div><div><span>Distância</span><strong>Aguardando cálculo real</strong></div><div><span>Tabela de materiais / preços</span><strong>Aguardando definição</strong></div></div><div className="mock-warning">As informações ausentes não foram inventadas. Serão preenchidas quando existirem no backend/documentação.</div></>}
        </aside>
      </div>
    </div></section>
  </>
}
