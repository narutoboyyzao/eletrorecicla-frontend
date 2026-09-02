import Icon from './Icon';
export default function EmptyState({ icon='recycle', title, text }) {return <div className="empty-state"><div className="empty-icon"><Icon name={icon} size={28}/></div><h3>{title}</h3><p>{text}</p></div>}
