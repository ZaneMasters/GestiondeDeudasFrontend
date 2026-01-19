import { Link } from "react-router-dom";

export default function DebtCard({ debt }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ display: "flex", flexDirection: "column", transition: "transform 0.2s" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
            <h5 style={{ fontWeight: 600, fontSize: "1.1rem", margin: 0, color: "var(--primary)" }}>{debt.description}</h5>
            <span
                style={{
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "2rem",
                    fontWeight: 600,
                    backgroundColor: debt.paid ? "rgba(16, 185, 129, 0.1)" : "rgba(251, 191, 36, 0.1)",
                    color: debt.paid ? "var(--success)" : "#d97706"
                }}
            >
                {debt.paid ? "Pagada" : "Pendiente"}
            </span>
        </div>

        <div style={{ marginBottom: "1.5rem", flex: 1 }}>
          <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700, color: "var(--text-main)" }}>
            ${debt.amount.toLocaleString()}
          </p>
          <small style={{ color: "var(--text-muted)" }}>Total a pagar</small>
        </div>

        <Link
            to={`/debts/${debt.id}`}
            className="btn-secondary"
            style={{ textAlign: "center", textDecoration: "none", display: "block" }}
        >
            Ver Detalles
        </Link>
      </div>
    </div>
  );
}
