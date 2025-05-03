import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const savedUser = localStorage.getItem("user");
    if (savedUser === email) {
      navigate("/dashboard");
    } else {
      alert("Usuario no encontrado. Regístrate primero.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Entrar</button>
      </form>
    </div>
  );
}