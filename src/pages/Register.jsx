import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await api.post("/auth/register", {
            email,
            password,
        });

        toast.success("Registro exitoso! Por favor inicia sesión.");
        navigate("/");
    } catch(err) {
        toast.error("Error al registrar. Intenta nuevamente.");
    }
  };

  return (
    <div className="container" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4" style={{ textAlign: "center", marginBottom: "1.5rem" }}>Crear Cuenta</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label className="form-label">Email</label>
            <input 
                className="form-control" 
                onChange={(e) => setEmail(e.target.value)} 
                type="email"
                placeholder="nombre@ejemplo.com"
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label className="form-label">Contraseña</label>
            <input
              className="form-control"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button className="btn-primary" style={{ width: "100%" }}>Registrarse</button>
        </form>
        
        <p style={{ marginTop: "1.5rem", textAlign: "center", color: "var(--text-muted)" }}>
          ¿Ya tienes cuenta? <Link to="/">Ingresar</Link>
        </p>
      </div>
    </div>
  );
}
