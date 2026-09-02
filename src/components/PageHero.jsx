export default function PageHero({ eyebrow, title, text, children }) {
  return <section className="page-hero"><div className="container-xl"><span className="eyebrow">{eyebrow}</span><div className="page-hero-row"><div><h1>{title}</h1><p>{text}</p></div>{children}</div></div></section>
}
