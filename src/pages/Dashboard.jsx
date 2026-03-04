import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { month: "Oct 25", revenue: 0, ebitda: 0, cashflow: 0 },
  { month: "Nov 25", revenue: 0, ebitda: 0, cashflow: 0 },
  { month: "Dec 25", revenue: 0, ebitda: 0, cashflow: 0 },
  { month: "Jan 26", revenue: 0, ebitda: 0, cashflow: 0 },
  { month: "Feb 26", revenue: 0, ebitda: 0, cashflow: 0 },
  { month: "Mar 26", revenue: 0, ebitda: 0, cashflow: 0 },
];

export default function Dashboard({ onAdd }) {
  return (
    <>
      <div className="header">
        <div className="header-logo">🔷</div>
        <div className="header-title">
          <h1>Vero</h1>
          <p>Dashboard</p>
        </div>
      </div>

      <div className="page-content">
        <h2 className="section-title">Key Metrics</h2>

        <div className="kpi-card">
          <div className="kpi-card-left">
            <div className="kpi-card-label">Revenue (Omsætning)</div>
            <div className="kpi-card-value">$0.00</div>
            <div className="kpi-card-sub">Current month</div>
          </div>
          <div className="kpi-icon" style={{ background: "#2563EB" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-left">
            <div className="kpi-card-label">Gross Profit</div>
            <div className="kpi-card-value">$0.00</div>
            <div className="kpi-card-sub">Revenue - Variable Costs</div>
          </div>
          <div className="kpi-icon" style={{ background: "#22C55E" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
        </div>

        <div className="tip-card">
          <span>💡</span>
          <div className="tip-card-text">
            <strong>Tip</strong>
            <p>Gå til KPIs-siden og vælg dine favorit metrics ved at trykke på ⭐</p>
          </div>
        </div>

        <div className="chart-section">
          <h2 className="section-title">Monthly Progress (Vækst)</h2>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#6366F1" dot={{ r: 4 }} name="Revenue" />
                <Line type="monotone" dataKey="ebitda" stroke="#22C55E" dot={{ r: 4 }} name="EBITDA" />
                <Line type="monotone" dataKey="cashflow" stroke="#94A3B8" dot={{ r: 4 }} name="Cash Flow" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <button className="fab" onClick={onAdd}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </>
  );
}
