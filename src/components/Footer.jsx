import { Link } from 'react-router-dom';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xl footer-grid">
        <div><Brand/><p>Uma plataforma acadêmica para aproximar pessoas de pontos adequados de descarte de resíduos eletroeletrônicos.</p></div>
        <div><strong>Navegação</strong><Link to="/mapa">Pontos de coleta</Link><Link to="/historico">Histórico</Link><Link to="/pontuacao">Pontuação</Link></div>
        <div><strong>Conta</strong><Link to="/login">Entrar</Link><Link to="/cadastro">Criar conta</Link><Link to="/perfil">Perfil</Link></div>
      </div>
      <div className="container-xl footer-bottom"><span>EletroRecicla • Trabalho de Conclusão de Curso</span><span>2026</span></div>
    </footer>
  );
}
