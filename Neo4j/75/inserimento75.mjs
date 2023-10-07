import neo4j from 'neo4j-driver'
import fs from 'fs'

const uri = "neo4j://localhost:7687";
const user = "neo4j";
const password = "admin";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();
  
var startTime = performance.now();
 
await session.run(
  'CALL apoc.load.json("file:///people75.json") YIELD value UNWIND value AS persone MERGE (p:Person{Full_name: persone.Full_name}) SET p.First_name = persone.First_name, p.Last_name = persone.Last_name, p.Phone_number = persone.Phone_number',
);
await session.run(
  'CALL apoc.load.json("file:///calls75.json") YIELD value UNWIND value AS chiamate MERGE (c:Call{ID: chiamate.ID}) SET c.Call_start = chiamate.Call_start, c.Call_end = chiamate.Call_end, c.Duration = chiamate.Duration, c.City = chiamate.City, c.Address = chiamate.Address, c.Cell_site = chiamate.Cell_site',
);

var endTime = performance.now();

await session.run(
  'CALL apoc.load.json("file:///people75.json") YIELD value UNWIND value AS persone MERGE (p:Person{Full_name: persone.Full_name}) WITH p, persone UNWIND persone.Calls_done as chiamate MERGE (c:Call{ ID: chiamate }) MERGE (p)-[:CALLS]->(c)',
);
await session.run(
  'MATCH (a:Person)-[:CALLS]-(c:Call)-[:CALLS]-(b:Person) MERGE (a)-[:KNOWS]-(b)',
);

await session.close();


let mia = `${endTime - startTime} msec\n`;

console.log(mia);

fs.appendFile('Inserimento75.txt', mia, (err) => {
  if (err) throw err
});

await driver.close();