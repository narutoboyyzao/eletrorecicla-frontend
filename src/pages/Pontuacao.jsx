import { BarChart3, Info } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import PageHeading from '../components/PageHeading'

export default function Pontuacao() {
  return <div className="page"><PageHeading eyebrow="Participação sustentável" title="Minha pontuação" description="Acompanhe os pontos creditados pelos seus descartes." /><div className="stat-grid"><div className="stat surface"><div className="stat-label">Pontos acumulados</div><div className="stat-value placeholder-value">A carregar</div></div><div className="stat surface"><div className="stat-label">Quantidade descartada</div><div className="stat-value placeholder-value">A carregar</div></div><div className="stat surface"><div className="stat-label">Posição no ranking</div><div className="stat-value placeholder-value">A carregar</div></div></div><section className="surface"><EmptyState icon={BarChart3} title="Pontuação aguardando integração" text="Os valores serão calculados pelo backend conforme a quantidade e o tipo de material descartado." /></section><div className="map-hint mt-3"><Info size={17} className="me-2" />O frontend não calcula pontos. A regra será aplicada pelo backend.</div></div>
}
