import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import MapView from '../components/MapView';

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="container-xl home-hero-grid">
        <div className="home-hero-copy">
          <span className="eyebrow">TECNOLOGIA PARA O DESCARTE CERTO</span>
          <h1>Seu eletrônico antigo ainda pode ter um <em>destino melhor.</em></h1>
          <p>Localize pontos de coleta adequados, registre seus descartes e acompanhe sua participação em uma única plataforma.</p>
          <div className="hero-actions"><Link to="/mapa" className="btn-primary-er">Encontrar ponto de coleta <Icon name="arrow"/></Link><Link to="/cadastro" className="text-link">Criar minha conta <span>↗</span></Link></div>
          <div className="hero-proof"><span><Icon name="check" size={16}/> localização em primeiro plano</span><span><Icon name="check" size={16}/> histórico de descartes</span></div>
        </div>
        <div className="hero-visual" aria-label="Ilustração do fluxo de descarte">
          <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
          <div className="device-card phone"><Icon name="device" size={38}/><span>celular</span></div>
          <div className="device-card cable"><span className="cable-shape">⌁</span><span>cabos</span></div>
          <div className="recycle-core"><Icon name="recycle" size={54}/><strong>DESCARTE<br/>CORRETO</strong></div>
          <div className="route-card"><span className="route-dot"></span><div><small>Seu próximo passo</small><strong>Encontrar um ponto</strong></div><Icon name="arrow"/></div>
        </div>
      </div>
    </section>

    <section className="problem-strip"><div className="container-xl"><p>Não é só sobre saber <strong>que precisa reciclar.</strong></p><p className="strip-big">É saber <em>onde levar.</em></p></div></section>

    <section className="section-space"><div className="container-xl section-grid-copy">
      <div><span className="section-number">01</span><span className="eyebrow">O PROBLEMA</span><h2>O descarte correto precisa ser mais <em>fácil de encontrar.</em></h2></div>
      <div className="section-text"><p>Celulares, computadores, teclados, mouses, cabos e carregadores não devem terminar no lixo comum. O EletroRecicla organiza o caminho entre quem quer descartar e os pontos que podem receber esses materiais.</p><Link to="/mapa" className="circle-link"><span>Ver mapa</span><Icon name="arrow"/></Link></div>
    </div></section>

    <section className="map-feature"><div className="container-xl">
      <div className="map-feature-head"><div><span className="eyebrow light">PONTOS DE COLETA</span><h2>O mapa é o centro da experiência.</h2></div><p>Explore, selecione marcadores e consulte informações do ponto sem sair da tela.</p></div>
      <div className="map-preview-wrap"><MapView compact/><div className="map-overlay-card"><span className="mini-label">COMO VAI FUNCIONAR</span><h3>Do endereço ao descarte, sem caça ao tesouro.</h3><div className="steps-mini"><span><b>1</b> Informe sua localização</span><span><b>2</b> Veja pontos próximos</span><span><b>3</b> Escolha onde descartar</span></div><Link to="/mapa" className="btn-white-er">Abrir mapa completo <Icon name="arrow"/></Link></div></div>
    </div></section>

    <section className="how-section"><div className="container-xl"><div className="section-title-center"><span className="eyebrow">COMO FUNCIONA</span><h2>Um caminho simples, do eletrônico ao destino certo.</h2></div><div className="how-grid">
      <article><span className="step-index">01</span><div className="how-icon"><Icon name="map" size={28}/></div><h3>Localize</h3><p>Acesse o mapa e encontre pontos de coleta cadastrados próximos à sua localização.</p></article>
      <article><span className="step-index">02</span><div className="how-icon"><Icon name="device" size={28}/></div><h3>Descarte</h3><p>Leve seu resíduo eletrônico ao ponto escolhido. A empresa registra o recebimento.</p></article>
      <article><span className="step-index">03</span><div className="how-icon"><Icon name="history" size={28}/></div><h3>Acompanhe</h3><p>Consulte seus registros de descarte e a pontuação associada à sua participação.</p></article>
    </div></div></section>

    <section className="cta-section"><div className="container-xl cta-box"><div><span className="eyebrow light">COMECE PELO MAPA</span><h2>Tem um eletrônico para descartar?</h2><p>Encontre um ponto de coleta e dê o próximo passo.</p></div><Link to="/mapa" className="cta-round"><Icon name="arrow" size={32}/><span>Explorar<br/>pontos</span></Link></div></section>
  </>
}
