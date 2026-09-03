import { Recycle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Brand({ to = '/inicio' }) {
  return <Link className="brand" to={to}><span className="brand-mark"><Recycle size={23} /></span><span className="brand-name">Eletro<span>Recicla</span></span></Link>
}
