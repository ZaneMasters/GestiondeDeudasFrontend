import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = !!localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link className="nav-brand" to="/debts">
          Gestión<span>Deudas</span>
        </Link>

        {isAuth && (
            <>
                <button 
                    className="mobile-toggle" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link 
                        className={`nav-link ${location.pathname === '/debts' ? 'active' : ''}`} 
                        to="/debts"
                        onClick={closeMenu}
                    >
                    Mis Deudas
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`nav-link ${location.pathname === '/debts/new' ? 'active' : ''}`} 
                        to="/debts/new"
                        onClick={closeMenu}
                    >
                    Nueva Deuda
                    </Link>
                </li>
                <li>
                    <button
                        className="btn-primary"
                        onClick={() => {
                            closeMenu();
                            logout();
                        }}
                    >
                    Cerrar Sesión
                    </button>
                </li>
                </ul>
            </>
        )}
      </div>
    </nav>
  );
}
