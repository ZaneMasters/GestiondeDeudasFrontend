import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DebtList from "./pages/DebtList";
import DebtDetail from "./pages/DebtDetail";
import CreateDebt from "./pages/CreateDebt";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />

      <div className="container mt-4">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected */}
          <Route
            path="/debts"
            element={
              <PrivateRoute>
                <DebtList />
              </PrivateRoute>
            }
          />

          <Route
            path="/debts/new"
            element={
              <PrivateRoute>
                <CreateDebt />
              </PrivateRoute>
            }
          />

          <Route
            path="/debts/:id"
            element={
              <PrivateRoute>
                <DebtDetail />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
