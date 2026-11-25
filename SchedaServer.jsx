// src/SchedaServer.jsx
import BadgeStato from "./BadgeStato"
import { statoServer } from "./calcoli"

function SchedaServer({ server }) {
  const { nome, ruolo, sede, ip, cpu, latenza, servizi, manutenzione } = server
  const stato = statoServer(server)

  return (
    <div className={`scheda scheda-${stato}`}>
      <h3>
        {nome} <BadgeStato stato={stato} />
      </h3>
      <p className="ruolo">
        {ruolo} · {sede} · {ip}
      </p>
      {/* cpu può valere 0 (server acceso a riposo): per questo confronto con null */}
      <p>CPU: {cpu === null ? "—" : `${cpu}%`}</p>
      <p>Latenza: {latenza === null ? "—" : `${latenza} ms`}</p>
      {/* un array vuoto è truthy, quindi controllo la length */}
      <p>Servizi: {servizi.length === 0 ? "nessuno" : servizi.join(", ")}</p>
      {/* manutenzione può non esistere (undefined) */}
      <p>
        Manutenzione:{" "}
        {manutenzione
          ? `${manutenzione.data}, ${manutenzione.motivo}`
          : "nessuna in programma"}
      </p>
    </div>
  )
}

export default SchedaServer
