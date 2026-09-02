const icons = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  map: <><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H3v2a4 4 0 0 0 4 4M17 6h4v2a4 4 0 0 1-4 4"/></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
  shield: <><path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  recycle: <><path d="m7 6 2-3 2 3M9 3v6a3 3 0 0 0 3 3h2"/><path d="m17 18-2 3-2-3m2 3v-6a3 3 0 0 0-3-3h-2"/></>,
  device: <><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M10 17h4"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  x: <><path d="M5 5l14 14M19 5 5 19"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  leaf: <><path d="M20 4c-9 0-15 4-15 10 0 3 2 6 6 6 6 0 9-7 9-16Z"/><path d="M5 20c3-5 7-8 12-11"/></>,
};

export default function Icon({ name, size = 20, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}
