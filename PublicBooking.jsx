import { useState } from "react";

export default function PublicBooking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleBooking(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Reserva tu turno</h2>
      {submitted ? (
        <div className="text-green-600 font-bold">
          ¡Reserva confirmada para {date} a las {time}!
        </div>
      ) : (
        <form onSubmit={handleBooking} className="flex flex-col gap-4">
          <input 
            type="date"
            className="border p-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input 
            type="time"
            className="border p-2 rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Reservar</button>
        </form>
      )}
    </div>
  );
}