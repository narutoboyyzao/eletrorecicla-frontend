import { ArrowRight, Award, Info, Recycle, Scale, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading'

const metricas = [
  { label: 'Pontos acumulados', icon: Award },
  { label: 'Quantidade descartada', icon: Scale },
  { label: 'Posição no ranking', icon: Trophy },
]

export default function Pontuacao() {
  return <div className="page points-page"><PageHeading eyebrow="Participação sustentável" title="Minha pontuação" description="Consulte os créditos gerados pelos descartes registrados." /><section className="points-overview"><div className="points-intro"><Recycle size={34} /><p>Saldo atual</p><strong>--</strong><span>O backend ainda não fornece saldo ou pontuação por usuário.</span></div><div className="points-metrics">{metricas.map(({ label, icon: Icon }) => <div className="points-metric" key={label}><Icon size={20} /><div><span>{label}</span><strong>--</strong></div></div>)}</div></section><div className="points-grid"><section className="surface points-activity"><div className="panel-heading"><div><p className="section-label">Movimentação</p><h2>Créditos recentes</h2></div><span className="api-tag">Endpoint pendente</span></div><div className="activity-head"><span>Descarte</span><span>Quantidade</span><span>Pontos</span></div><div className="structured-empty"><Award size={24} /><div><strong>Pontuação ainda indisponível</strong><p>Esta área será carregada quando a API fornecer os créditos do usuário autenticado.</p></div></div></section><aside className="surface points-rule"><Info size={22} /><h2>Como os pontos são definidos</h2><p>Cada produto já possui o campo <code>pontosPorKg</code> no backend.</p><p>A API ainda precisa calcular os créditos da coleta e associá-los ao usuário.</p><Link to="/historico">Consultar histórico <ArrowRight size={17} /></Link></aside></div></div>
}
