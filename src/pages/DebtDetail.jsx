import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";

export default function DebtDetail() {
  const { id } = useParams();
  const [debt, setDebt] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/debts").then((res) => {
      let data = [];
      if (Array.isArray(res.data)) {
        data = res.data;
      } else if (res.data && Array.isArray(res.data.data)) {
        data = res.data.data;
      } else if (res.data && Array.isArray(res.data.content)) {
        data = res.data.content;
      } else if (res.data && Array.isArray(res.data.debts)) {
        data = res.data.debts;
      }
      
      const found = data.find((d) => d.id == id);
      if (found) setDebt(found);
    }).catch(err => {
        console.error("Error fetching debt detail:", err);
        toast.error("Error al cargar detalle de deuda");
    });
  }, [id]);

  const payDebt = async () => {
    try {
       await api.post(`/debts/${id}/pay`);
       toast.success("Deuda Pagada!");
       navigate("/debts");
    } catch (err) {
       toast.error("Error al pagar la deuda");
    }
  };

  if (!debt) return null;

  return (
    <div className="container" style={{ maxWidth: "600px" }}>
        <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h2 style={{ margin: 0 }}>Detalle de Deuda</h2>
                <span
                    style={{
                        fontSize: "0.875rem",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "2rem",
                        fontWeight: 600,
                        backgroundColor: debt.paid ? "rgba(16, 185, 129, 0.1)" : "rgba(251, 191, 36, 0.1)",
                        color: debt.paid ? "var(--success)" : "#d97706"
                    }}
                >
                    {debt.paid ? "Pagada" : "Pendiente"}
                </span>
            </div>
            
            <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontSize: "0.875rem", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Descripción</label>
                <div style={{ fontSize: "1.25rem", fontWeight: 500 }}>{debt.description}</div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
                <label style={{ fontSize: "0.875rem", color: "var(--text-muted)", display: "block", marginBottom: "0.25rem" }}>Monto</label>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary)" }}>${debt.amount.toLocaleString()}</div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
                 <button 
                    className="btn-secondary" 
                    onClick={() => navigate("/debts")}
                    style={{ flex: 1 }}
                >
                    Volver
                </button>
                {!debt.paid && (
                <button className="btn-primary" onClick={payDebt} style={{ flex: 1 }}>
                    Marcar como Pagada
                </button>
                )}
            </div>
        </div>
    </div>
  );
}
