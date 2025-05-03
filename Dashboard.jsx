import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Bienvenido, {user}</h1>
      <p className="mb-8">Aquí verás tus citas.</p>
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Citas de hoy:</h2>
        <ul className="list-disc list-inside">
          <li>Cliente: Ana López - 10:00 AM</li>
          <li>Cliente: Juan Pérez - 11:30 AM</li>
        </ul>
      </div>
    </div>
  );
}