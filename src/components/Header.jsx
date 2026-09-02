import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Brand from './Brand';
import Icon from './Icon';

const links = [
  ['/', 'Início'],
  ['/mapa', 'Pontos de coleta'],
  ['/pontuacao', 'Pontuação'],
  ['/historico', 'Histórico'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container-xl header-inner">
        <Brand />
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <NavLink to="/perfil" onClick={() => setOpen(false)}>Perfil</NavLink>
          <div className="mobile-actions">
            <Link className="btn btn-outline-light" to="/login">Entrar</Link>
            <Link className="btn btn-light text-success fw-semibold" to="/cadastro">Criar conta</Link>
          </div>
        </nav>
        <div className="header-actions">
          <Link className="header-login" to="/login">Entrar</Link>
          <Link className="header-signup" to="/cadastro">Criar conta <Icon name="arrow" size={17}/></Link>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu"><Icon name={open ? 'x' : 'menu'} /></button>
      </div>
    </header>
  );
}
