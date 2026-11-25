// src/calcoli.js
// Qui ci sono solo funzioni JavaScript: niente JSX e niente React.

// Le due soglie della CPU (in percentuale)
export const SOGLIE = { attenzione: 70, critico: 90 }

// Dice in che stato è un server.
// Si controlla prima "online", perché un server offline ha cpu: null.
export function statoServer(server) {
  return !server.online
    ? "offline"
    : server.cpu >= SOGLIE.critico
    ? "critico"
    : server.cpu >= SOGLIE.attenzione
    ? "attenzione"
    : "ok"
}

// Conta quanti server sono in un certo stato
export function contaPerStato(servers, stato) {
  return servers.filter((s) => statoServer(s) === stato).length
}

// Media della CPU dei soli server accesi.
// Se non ce ne sono restituisce null (evita 0 / 0 = NaN).
export function cpuMedia(servers) {
  const accesi = servers.filter((s) => s.online)
  if (accesi.length === 0) {
    return null
  }
  const somma = accesi.reduce((tot, s) => tot + s.cpu, 0)
  return somma / accesi.length
}

// Server acceso con la latenza più alta (restituisce il server intero).
// Il valore iniziale di reduce è null, così con array vuoto non va in errore.
export function piuLento(servers) {
  const accesi = servers.filter((s) => s.online)
  return accesi.reduce(
    (lento, s) => (lento === null || s.latenza > lento.latenza ? s : lento),
    null
  )
}

// Cerca un server per nome: se non c'è restituisce undefined
export function trovaServer(servers, nome) {
  return servers.find((s) => s.nome === nome)
}
