import { Medal } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import PageHeading from '../components/PageHeading'

export default function Ranking() {
  return <div className="page"><PageHeading eyebrow="Classificação" title="Ranking" description="A classificação será organizada pela pontuação acumulada." /><section className="surface"><div className="ranking-row ranking-header"><span>Posição</span><span>Usuário</span><span>Pontuação</span></div><EmptyState icon={Medal} title="Ranking ainda sem dados" text="A lista de usuários e a posição da sua conta serão exibidas quando a API estiver disponível." /></section></div>
}
