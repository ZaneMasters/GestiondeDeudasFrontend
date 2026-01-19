import { useEffect, useState } from "react";
import api from "../api/api";
import DebtCard from "../components/DebtCard";

export default function DebtList() {
  const [debts, setDebts] = useState([]);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    api.get("/debts").then((res) => {
        if (Array.isArray(res.data)) {
            setDebts(res.data);
        } else if (res.data && Array.isArray(res.data.data)) {
            // Handle case where API returns { source: '...', data: [...] }
            setDebts(res.data.data);
        } else {
            console.error("Expected array from /debts but got:", res.data);
            // Fallbacks for other potential structures
            if (res.data && Array.isArray(res.data.content)) {
                setDebts(res.data.content);
            } else if (res.data && Array.isArray(res.data.debts)) {
                setDebts(res.data.debts);
            } else {
                setDebts([]);
            }
        }
      })
      .catch((err) => {
        console.error("Error fetching debts:", err);
        setDebts([]);
      });
  }, []);

  const safeDebts = Array.isArray(debts) ? debts : [];
  const filtered = safeDebts.filter((d) =>
    filter === "ALL" ? true : filter === "PAID" ? d.paid : !d.paid
  );

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h2 style={{ margin: 0 }}>Mis Deudas</h2>

        <div className="btn-group" style={{ display: "flex", gap: "0.5rem" }}>
          <button 
                className={filter === "ALL" ? "btn-primary" : "btn-secondary"} 
                onClick={() => setFilter("ALL")}
            >
            Todas
          </button>
          <button 
                className={filter === "PENDING" ? "btn-primary" : "btn-secondary"} 
                onClick={() => setFilter("PENDING")}
            >
            Pendientes
          </button>
          <button 
                className={filter === "PAID" ? "btn-primary" : "btn-secondary"} 
                onClick={() => setFilter("PAID")}
            >
            Pagadas
          </button>
        </div>
      </div>

      <div className="row">
        {filtered.map((debt) => (
          <DebtCard key={debt.id} debt={debt} />
        ))}
      </div>
    </div>
  );
}
