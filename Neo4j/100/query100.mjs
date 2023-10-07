import neo4j from 'neo4j-driver'
import fs from 'fs'

const uri = "neo4j://localhost:7687";
const user = "neo4j";
const password = "admin";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();


//query 1
for(var y = 0; y < 31; y ++) {
  var startTime = performance.now();
  
  await session.run('MATCH (n:Call) WHERE n.Cell_site > 100 RETURN n',
  );
  
  var endTime = performance.now();


  let mia = `${endTime - startTime} msec\n`;

  fs.appendFile('Query1-100.txt', mia, (err) => {
    if (err) throw err
  });
}

//query 2
for(var y = 0; y < 31; y ++) {
  var startTime = performance.now();
  
  await session.run('MATCH (n:Call) WHERE n.Cell_site > 100 AND n.City > "V" RETURN n',
  );
  
  var endTime = performance.now();


  let mia = `${endTime - startTime} msec\n`;

  fs.appendFile('Query2-100.txt', mia, (err) => {
    if (err) throw err
  });
}

//query 3
for(var y = 0; y < 31; y ++) {
  var startTime = performance.now();
  
  await session.run('MATCH (n:Call) WHERE n.Cell_site > 100 AND n.City > "V" AND n.Call_start > 1660000000 RETURN n',
  );
  
  var endTime = performance.now();


  let mia = `${endTime - startTime} msec\n`;

  fs.appendFile('Query3-100.txt', mia, (err) => {
    if (err) throw err
  });
}

//query 4
for(var y = 0; y < 31; y ++) {
  var startTime = performance.now();
  
  await session.run('MATCH (n:Call)-[r]-(p:Person) WHERE n.Cell_site > 100 AND n.City > "V" AND n.Call_start > 1660000000 AND p.Phone_number > "700" RETURN n',
  );
  
  var endTime = performance.now();


  let mia = `${endTime - startTime} msec\n`;

  fs.appendFile('Query4-100.txt', mia, (err) => {
    if (err) throw err
  });
}

//query 5
for(var y = 0; y < 31; y ++) {
  var startTime = performance.now();
  
  await session.run('MATCH (n:Call)-[r]-(p:Person) WHERE n.Cell_site > 100 AND n.City > "V" AND n.Call_start > 1660000000 AND (p.Phone_number > "700" OR p.Last_name > "S") RETURN n',
  );
  
  var endTime = performance.now();


  let mia = `${endTime - startTime} msec\n`;

  fs.appendFile('Query5-100.txt', mia, (err) => {
    if (err) throw err
  });
}

await session.close()

await driver.close()