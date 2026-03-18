# 📊 Benchmarking NoSQL: MongoDB vs Neo4j

Questo progetto analizza quantitativamente le differenze tra il paradigma **Document-oriented** e quello **Graph-oriented**, valutando l'impatto della dimensione dei dati e della complessità delle query sulle performance del sistema.

## 🎯 Obiettivi dell'Analisi
* **Scalabilità:** Confrontare i tempi di risposta al variare della dimensione dei dataset (da migliaia a milioni di record).
* **Query Complexity:** Testare query di complessità crescente, dalle semplici letture puntuali agli attraversamenti di relazioni profonde (deep joins/traversal).
* **Automazione:** Generazione di dataset sintetici per garantire test riproducibili e bilanciati.

## 🛠️ Stack Tecnologico
* **Database:** - **MongoDB:** Rappresentazione dei dati tramite documenti flessibili (JSON-like).
  - **Neo4j:** Rappresentazione tramite nodi e relazioni esplicite.
* **Data Generation:** Scripting in **Node.js** (utilizzando **ES Modules** `.mjs`) per la creazione automatizzata di dataset scalabili.
* **Query Languages:** MQL (MongoDB Query Language) e Cypher (Neo4j).

## ⚙️ Workflow di Test
1. **Generazione:** Gli script JavaScript creano dataset sintetici di diverse grandezze.
2. **Ingestion:** Caricamento dei dati nei rispettivi DBMS.
3. **Execution:** Esecuzione di query strutturate per misurare i tempi di latenza e l'utilizzo delle risorse.
4. **Confronto:** Analisi statistica dei tempi di esecuzione per identificare i "break points" di ciascuna tecnologia.



## 🔍 Conclusioni in sintesi
I test effettuati evidenziano come:
- **MongoDB** mantenga performance eccellenti nella gestione di grandi volumi di dati atomici.
- **Neo4j** superi drasticamente MongoDB quando la complessità delle query richiede l'attraversamento di molteplici livelli di relazione, dove il costo computazionale dei "join simulati" in MongoDB diventa proibitivo.

---
*L'analisi dettagliata, i grafici delle performance e le metodologie di test sono disponibili nel **Report.pdf**.*
