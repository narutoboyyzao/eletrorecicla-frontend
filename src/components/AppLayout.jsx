import { BarChart3, Clock3, Home, LogIn, MapPinned, Medal } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import Brand from './Brand'

const nav = [
  { to: '/inicio', label: 'Página inicial', mobileLabel: 'Início', icon: Home },
  { to: '/mapa', label: 'Mapa', icon: MapPinned },
  { to: '/pontuacao', label: 'Pontuação', icon: BarChart3 },
  { to: '/ranking', label: 'Ranking', icon: Medal },
  { to: '/historico', label: 'Histórico', icon: Clock3 },
]

export default function AppLayout() {
  return <div className="app-shell"><header className="topbar"><div className="topbar-inner"><Brand /><nav className="desktop-nav" aria-label="Navegação principal">{nav.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} className="nav-link-app"><Icon size={17} />{label}</NavLink>)}</nav><NavLink to="/login" className="profile-link login-link"><span className="avatar"><LogIn size={19} /></span><span className="profile-copy"><strong>Entrar</strong></span></NavLink></div></header><main><Outlet /></main><nav className="bottom-nav" aria-label="Navegação móvel">{nav.slice(0, 4).map(({ to, label, mobileLabel, icon: Icon }) => <NavLink key={to} to={to} className="bottom-link"><Icon size={20} />{mobileLabel || label}</NavLink>)}<NavLink to="/login" className="bottom-link"><LogIn size={20} />Entrar</NavLink></nav></div>
}
