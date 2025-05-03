import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    localStorage.setItem("user", email);
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Registro</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Registrarse</button>
      </form>
    </div>
  );
}