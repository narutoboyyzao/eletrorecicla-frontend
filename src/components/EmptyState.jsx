export default function EmptyState({ icon: Icon, title, text, action }) {
  return <div className="empty-state"><span className="empty-icon"><Icon size={25} /></span><h2>{title}</h2><p>{text}</p>{action && <div className="mt-3">{action}</div>}</div>
}
