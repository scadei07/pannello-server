# Il pannello dei server

Esercizio di laboratorio (TPSIT): un pannello in React che mostra lo stato di sei server.
Fatto con Vite, JSX, componenti e props (senza `useState`).

## Come avviarlo

```bash
npm install
npm run dev
```

Poi apri l'indirizzo che compare nel terminale (di solito http://localhost:5173).

## Cosa c'è dentro

- `src/App.jsx` — calcola i dati e li passa ai componenti
- `src/calcoli.js` — funzioni di calcolo (`statoServer`, `contaPerStato`, `cpuMedia`, `piuLento`, `trovaServer`)
- `src/Intestazione.jsx`, `Riepilogo.jsx`, `GrigliaServer.jsx`, `SchedaServer.jsx`, `BadgeStato.jsx`, `ServerInEvidenza.jsx`, `Avvisi.jsx` — i componenti
- `src/dati.js` e `src/dati-blackout.js` — i dati dell'esercizio
- `risposte.md` — risposte alle tre domande finali
