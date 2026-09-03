import { ArrowRight, Award, Info, Recycle, Scale, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading'

const metricas = [
  { label: 'Pontos acumulados', icon: Award },
  { label: 'Quantidade descartada', icon: Scale },
  { label: 'Posição no ranking', icon: Trophy },
]

export default function Pontuacao() {
  return <div className="page points-page"><PageHeading eyebrow="Participação sustentável" title="Minha pontuação" description="Consulte os créditos gerados pelos descartes registrados." /><section className="points-overview"><div className="points-intro"><Recycle size={34} /><p>Saldo atual</p><strong>--</strong><span>Os pontos serão exibidos após a integração com a API.</span></div><div className="points-metrics">{metricas.map(({ label, icon: Icon }) => <div className="points-metric" key={label}><Icon size={20} /><div><span>{label}</span><strong>--</strong></div></div>)}</div></section><div className="points-grid"><section className="surface points-activity"><div className="panel-heading"><div><p className="section-label">Movimentação</p><h2>Créditos recentes</h2></div><span className="api-tag">Dados da API</span></div><div className="activity-head"><span>Descarte</span><span>Quantidade</span><span>Pontos</span></div><div className="structured-empty"><Award size={24} /><div><strong>Nenhum crédito disponível</strong><p>Quando uma coleta for registrada, a movimentação aparecerá aqui.</p></div></div></section><aside className="surface points-rule"><Info size={22} /><h2>Como os pontos são definidos</h2><p>A pontuação considera a quantidade descartada e o tipo de material recebido.</p><p>O cálculo será realizado pelo backend, conforme as regras do projeto.</p><Link to="/historico">Consultar histórico <ArrowRight size={17} /></Link></aside></div></div>
}
