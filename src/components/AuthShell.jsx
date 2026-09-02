import { Link } from 'react-router-dom';
import Brand from './Brand';
import Icon from './Icon';

export default function AuthShell({ title, text, children }) {
  return <div className="auth-shell">
    <aside className="auth-side">
      <div className="auth-side-inner"><Brand/><div className="auth-copy"><span className="eyebrow light">DESCARTE RESPONSÁVEL</span><h1>O eletrônico termina o uso.<br/><em>Não a história.</em></h1><p>Encontre um destino adequado para seus resíduos e acompanhe sua participação no EletroRecicla.</p></div>
      <div className="auth-flow"><div><Icon name="pin"/><span>Encontre um ponto</span></div><div><Icon name="device"/><span>Faça o descarte</span></div><div><Icon name="trophy"/><span>Acompanhe sua pontuação</span></div></div></div>
    </aside>
    <section className="auth-panel"><div className="auth-panel-inner"><Link className="auth-back" to="/"><span>←</span> Voltar ao início</Link><div className="auth-heading"><h2>{title}</h2><p>{text}</p></div>{children}</div></section>
  </div>
}
