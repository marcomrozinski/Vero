import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KPIs from "./pages/KPIs";
import Transactions from "./pages/Transactions";
import AddTransactionModal from "./components/AddTransactionModal";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard onAdd={() => setShowModal(true)} />} />
          <Route path="/kpis" element={<KPIs onAdd={() => setShowModal(true)} />} />
          <Route path="/transactions" element={<Transactions onAdd={() => setShowModal(true)} />} />
        </Routes>

        {showModal && <AddTransactionModal onClose={() => setShowModal(false)} />}

        <nav className="bottom-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Home</span>
          </NavLink>
          <NavLink to="/kpis" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <span>KPIs</span>
          </NavLink>
          <NavLink to="/transactions" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            <span>Transaktioner</span>
          </NavLink>
        </nav>
      </div>
    </Router>
  );
}
