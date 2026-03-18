# 📊 Benchmarking NoSQL: MongoDB vs Neo4j (Phone Records)

Questo progetto analizza quantitativamente le differenze tra il paradigma **Document-oriented** (MongoDB) e quello **Graph-oriented** (Neo4j), applicato all'analisi di **registri telefonici (CDR)** per scopi investigativi.

## 🎯 Obiettivi dell'Analisi
* **Investigative Intelligence:** Simulare la ricerca di reti di contatti e frequenza di comunicazioni tra soggetti sotto indagine.
* **Scalabilità:** Confronto dei tempi di risposta su tre diverse scale di dati: **Small** (1.000 contatti), **Medium** (10.000 contatti) e **Large** (100.000 contatti).
* **Query Complexity:** Testare l'efficienza nel trovare "catene di contatti" (es. chi ha chiamato chi, fino al terzo grado di separazione).

## 🛠️ Stack Tecnologico
* **Database:** - **MongoDB:** Utilizzato per lo storage dei dati anagrafici e dei singoli log di chiamata come documenti atomici.
  - **Neo4j:** Utilizzato per mappare le chiamate come relazioni (`CALLED`) tra nodi (`Person`), facilitando la Link Analysis.
* **Data Generation:** Scripting in **Node.js** (ES Modules `.mjs`) per generare tabulati telefonici sintetici ma strutturalmente coerenti.
* **Query Languages:** MQL (MongoDB Query Language) e Cypher (Neo4j).

## ⚙️ Workflow di Test
1. **Generazione:** Gli script JS creano profili utente e log di chiamate con timestamp e durate.
2. **Ingestion:** Caricamento dei dati tramite tool di importazione nativi per massimizzare l'efficienza.
3. **Execution:** Benchmark su query di:
   - Ricerca puntuale (es. "Tutte le chiamate effettuate dal numero X").
   - Analisi delle relazioni (es. "Trova tutti i contatti indiretti tra il numero A e il numero B").

## 🔍 Conclusioni in sintesi
I test evidenziano che:
- **MongoDB** è ideale per l'archiviazione e la ricerca di singoli tabulati (logging puro).
- **Neo4j** è imprescindibile per l'analisi investigativa: mentre MongoDB richiede operazioni di `join` costose per ricostruire le catene di chiamate, Neo4j attraversa i legami in tempo reale, rendendo immediata l'identificazione di cerchie di contatti sospetti.

---
*L'analisi dettagliata, i grafici delle performance e le metodologie di test sono disponibili nel **Report.pdf**.*
