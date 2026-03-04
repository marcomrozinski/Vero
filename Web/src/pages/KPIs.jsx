import { useState } from "react";

const kpis = [
  { id: 1, label: "Revenue (Omsætning)", value: "$0.00", sub: "Current month", color: "#2563EB", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { id: 2, label: "Gross Profit", value: "$0.00", sub: "Revenue - Variable Costs", color: "#22C55E", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
  { id: 3, label: "EBITDA", value: "$0.00", sub: "Current month", color: "#22C55E", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { id: 4, label: "Contribution Margin", value: "0.0%", sub: "Dækningsgrad", color: "#A855F7", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg> },
  { id: 5, label: "Cash Flow", value: "+$0.00", sub: "Current month", color: "#F97316", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg> },
  { id: 6, label: "Variable Costs", value: "$0.00", sub: "COGS - Current month", color: "#EF4444", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg> },
];

const definitions = [
  { label: "EBITDA", desc: "Earnings Before Interest, Taxes, Depreciation, and Amortization", color: "#2563EB" },
  { label: "Contribution Margin", desc: "(Revenue - Variable Costs) / Revenue × 100%", color: "#22C55E" },
  { label: "Cash Flow", desc: "Net cash movement (Revenue - All Costs)", color: "#A855F7" },
  { label: "Variable Costs", desc: "Costs that change with production volume (COGS)", color: "#EF4444" },
];

export default function KPIs({ onAdd }) {
  const [starred, setStarred] = useState([1, 2]);

  const toggleStar = (id) => {
    setStarred(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  return (
    <>
      <div className="header">
        <div className="header-logo">🔷</div>
        <div className="header-title">
          <h1>Vero</h1>
          <p>Alle Metrics</p>
        </div>
      </div>

      <div className="page-content">
        <div className="info-banner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <div className="info-banner-text">
            <strong>Vælg dine key metrics</strong>
            <p>Tryk på ⭐ for at tilføje en KPI til Home siden</p>
          </div>
        </div>

        <h2 className="section-title">Alle KPI'er</h2>

        {kpis.map(kpi => (
          <div className="kpi-card" key={kpi.id}>
            <div className="kpi-card-left">
              <div className="kpi-card-label">{kpi.label}</div>
              <div className="kpi-card-value">{kpi.value}</div>
              <div className="kpi-card-sub">{kpi.sub}</div>
            </div>
            <div className="kpi-icon" style={{ background: kpi.color }}>
              {kpi.icon}
              <button className={`star-btn ${starred.includes(kpi.id) ? "starred" : ""}`} onClick={() => toggleStar(kpi.id)}>
                <svg viewBox="0 0 24 24" fill={starred.includes(kpi.id) ? "#F59E0B" : "none"} stroke={starred.includes(kpi.id) ? "#F59E0B" : "#9CA3AF"} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </button>
            </div>
          </div>
        ))}

        <div className="kpi-definitions">
          <h3>KPI Definitioner</h3>
          {definitions.map((d, i) => (
            <div className="kpi-def-item" key={i}>
              <div className="kpi-def-dot" style={{ background: d.color }} />
              <span><strong>{d.label}:</strong> {d.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="fab" onClick={onAdd}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </>
  );
}
