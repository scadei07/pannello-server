# Tre domande sul flusso dei dati

## 1. Il pulsante «Riavvia»

Non si fa perché le props sono di sola lettura: un componente non può modificare quello che riceve.
Se `SchedaServer` scrivesse `server.online = true`, cambierebbe un dato che non è suo.
Il dato `online` vive in `dati.js` e viene letto da `App`, che lo fa scendere ai componenti, quindi dovrebbe essere `App` a cambiarlo.
Per farlo manca lo stato (`useState`): serve un modo per far cambiare un dato a React e ridisegnare la pagina. Lo vediamo nella settimana 8.

## 2. Lo stato calcolato due volte

Perché sia `SchedaServer` sia `contaPerStato` usano la stessa funzione `statoServer`, scritta una volta sola in `calcoli.js`.
Con gli stessi dati dà sempre lo stesso risultato, quindi i numeri del riepilogo e i colori delle schede arrivano dalla stessa regola e non possono essere in disaccordo.

## 3. Chi riceve cosa

Scelgo `BadgeStato`: riceve solo la stringa `stato` e non tutto il server.
Passargli solo quello gli dà meno dati di cui occuparsi: il badge non può leggere o sbagliare altri campi, e si può riusare ovunque ci sia uno stato.
Anche il codice è più semplice da capire e da provare.
