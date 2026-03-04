export default function Transactions({ onAdd }) {
  return (
    <>
      <div className="header">
        <div className="header-logo">🔷</div>
        <div className="header-title">
          <h1>Vero</h1>
          <p>Transaktioner</p>
        </div>
      </div>

      <div className="page-content">
        <h2 className="section-title">Alle Transaktioner</h2>

        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h3>Ingen transaktioner endnu</h3>
          <p>Tryk på + knappen for at tilføje din første transaktion</p>
        </div>
      </div>

      <button className="fab" onClick={onAdd}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </>
  );
}
