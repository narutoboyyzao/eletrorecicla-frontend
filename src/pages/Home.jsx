import { ArrowRight, Cable, Keyboard, Laptop, MapPin, Mouse, Search, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import triagemImg from '../assets/eletronicos-triagem.png'

const materiais = [
  { nome: 'Celulares e tablets', icon: Smartphone },
  { nome: 'Computadores', icon: Laptop },
  { nome: 'Teclados', icon: Keyboard },
  { nome: 'Mouses', icon: Mouse },
  { nome: 'Cabos e carregadores', icon: Cable },
]

export default function Home() {
  return <div className="service-home"><section className="service-hero" style={{ backgroundImage: `url(${triagemImg})` }}><div className="service-hero-overlay" /><div className="service-hero-content"><p className="service-kicker">Descarte de eletrônicos em Barueri</p><h1>Encontre onde descartar seu eletrônico.</h1><p>Consulte os pontos de coleta no mapa e veja as informações do local antes de sair de casa.</p><div className="hero-search"><Search size={20} /><input aria-label="Buscar endereço ou CEP" placeholder="Digite seu endereço ou CEP" /><Link to="/mapa">Buscar pontos</Link></div><Link className="location-link" to="/mapa"><MapPin size={18} /> Ver todos os pontos no mapa</Link></div></section><section className="material-band"><div className="content-width"><div className="material-heading"><p className="section-label">O que descartar</p><h2>Eletrônicos aceitos nos pontos de coleta</h2><p>Consulte o ponto escolhido para confirmar o recebimento do material.</p></div><div className="material-list">{materiais.map(({ nome, icon: Icon }) => <div className="material-item" key={nome}><Icon size={25} /><span>{nome}</span></div>)}</div></div></section><section className="process-band"><div className="content-width"><div className="process-intro"><p className="section-label">Como funciona</p><h2>Descarte correto em três etapas</h2></div><div className="process-list"><article><span>1</span><div><h3>Localize um ponto</h3><p>Abra o mapa e veja os locais de coleta em Barueri.</p></div></article><article><span>2</span><div><h3>Consulte o local</h3><p>Confira as informações disponíveis antes de levar o material.</p></div></article><article><span>3</span><div><h3>Realize a entrega</h3><p>A empresa registra o recebimento do eletrônico.</p></div></article></div></div></section><section className="map-callout"><div className="content-width map-callout-inner"><div><p className="section-label">Pontos de coleta</p><h2>Veja os locais disponíveis em Barueri</h2><p>O mapa é a principal ferramenta do EletroRecicla.</p></div><Link className="map-callout-link" to="/mapa">Abrir mapa <ArrowRight size={18} /></Link></div></section><footer className="site-footer"><div className="content-width"><strong>EletroRecicla</strong><span>Projeto acadêmico para descarte responsável de resíduos eletrônicos.</span></div></footer></div>
}
