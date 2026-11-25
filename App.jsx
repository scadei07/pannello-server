// src/App.jsx
import "./App.css"
import { sistema, servers, avvisi } from "./dati"
import {
  contaPerStato,
  cpuMedia,
  piuLento,
  trovaServer
} from "./calcoli"
import Intestazione from "./Intestazione"
import Riepilogo from "./Riepilogo"
import GrigliaServer from "./GrigliaServer"
import ServerInEvidenza from "./ServerInEvidenza"
import Avvisi from "./Avvisi"

function App() {
  // Tutti i calcoli si fanno qui in App, poi i dati "scendono" ai componenti
  const online = servers.filter((s) => s.online).length
  const cercato = "db-01"

  return (
    <div className="pannello">
      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={online}
        totale={servers.length}
      />
      <Riepilogo
        ok={contaPerStato(servers, "ok")}
        attenzione={contaPerStato(servers, "attenzione")}
        critici={contaPerStato(servers, "critico")}
        offline={contaPerStato(servers, "offline")}
        mediaCpu={cpuMedia(servers)}
        lento={piuLento(servers)}
      />
      <GrigliaServer servers={servers} />
      <ServerInEvidenza cercato={cercato} server={trovaServer(servers, cercato)} />
      <Avvisi elenco={avvisi} />
    </div>
  )
}

export default App

/*
  RISPOSTE ALLA SFIDA "IL BLACKOUT"

  1. Se dati-blackout.js avesse sette server, nella griglia si vedrebbero
     comunque solo sei schede, perché GrigliaServer scrive a mano le schede
     da servers[0] a servers[5]: il settimo (servers[6]) non verrebbe mostrato.
     Con cinque server, invece, servers[5] sarebbe undefined e la pagina
     diventerebbe bianca con un errore in console, perché SchedaServer
     proverebbe a leggere le proprietà di undefined.

  2. Non ho dovuto toccare i componenti perché i componenti non contengono
     i dati: li ricevono dalle props, che scendono da App (flusso
     unidirezionale). Cambiando l'import in App cambiano i dati che
     scendono, e ogni componente mostra quello che riceve.
*/
