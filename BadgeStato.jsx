// src/BadgeStato.jsx
// Riceve solo la stringa dello stato, non tutto il server.
function BadgeStato({ stato }) {
  const testo =
    stato === "ok"
      ? "OK"
      : stato === "attenzione"
      ? "Attenzione"
      : stato === "critico"
      ? "Critico"
      : "Offline"

  return <span className={`badge badge-${stato}`}>{testo}</span>
}

export default BadgeStato
