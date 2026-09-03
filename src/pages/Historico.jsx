import { Clock3 } from 'lucide-react'
import EmptyState from '../components/EmptyState'
import PageHeading from '../components/PageHeading'

export default function Historico() {
  return <div className="page"><PageHeading eyebrow="Seus descartes" title="Histórico" description="Cada descarte registrado aparecerá individualmente nesta lista." /><section className="surface table-responsive"><table className="table align-middle"><thead><tr><th>Data</th><th>Local</th><th>Material</th><th>Quantidade</th><th>Pontos</th></tr></thead><tbody><tr><td colSpan="5" className="p-0"><EmptyState icon={Clock3} title="Nenhum registro disponível" text="O histórico será preenchido com os descartes fornecidos pela API." /></td></tr></tbody></table></section></div>
}
