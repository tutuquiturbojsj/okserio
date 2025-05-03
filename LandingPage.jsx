import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a TurnoFácil</h1>
      <p className="mb-8">Gestiona las citas de tu negocio automáticamente.</p>
      <div className="flex gap-4">
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Registrarse</Link>
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">Iniciar Sesión</Link>
      </div>
    </div>
  );
}