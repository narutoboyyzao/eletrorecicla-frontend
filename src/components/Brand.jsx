import { Link } from 'react-router-dom';
import mark from '../assets/logo-mark.svg';

export default function Brand({ dark = false }) {
  return (
    <Link to="/" className={`brand ${dark ? 'brand-dark' : ''}`} aria-label="EletroRecicla - início">
      <span className="brand-mark"><img src={mark} alt="" /></span>
      <span className="brand-name">Eletro<span>Recicla</span></span>
    </Link>
  );
}
