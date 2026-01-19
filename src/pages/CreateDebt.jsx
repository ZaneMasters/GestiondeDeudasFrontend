import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";

export default function CreateDebt() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await api.post("/debts", {
            amount,
            description,
        });

        toast.success("Deuda creada correctamente");
        navigate("/debts");
    } catch (err) {
        toast.error("Error al crear la deuda");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px" }}>
        <div className="card">
            <h2 className="mb-4" style={{ textAlign: "center", marginBottom: "2rem" }}>Nueva Deuda</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.5rem" }}>
                <label className="form-label">Descripción</label>
                <input 
                    className="form-control" 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Ej: Cena con amigos"
                />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                <label className="form-label">Monto</label>
                <input
                    className="form-control"
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                />
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button 
                        type="button" 
                        className="btn-secondary" 
                        style={{ flex: 1, textAlign: "center" }}
                        onClick={() => navigate("/debts")}
                    >
                        Cancelar
                    </button>
                    <button className="btn-primary" style={{ flex: 1 }}>Guardar</button>
                </div>
            </form>
        </div>
    </div>
  );
}
