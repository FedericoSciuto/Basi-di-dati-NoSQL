import { MongoClient } from 'mongodb';
import fs from 'fs';

const dbName = 'CallsRecord25';
const client = new MongoClient('mongodb://127.0.0.1:27017');

var startTime = performance.now();

client.connect(function(err) {
  
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const data = fs.readFileSync('calls25.json');
  const docs = JSON.parse(data.toString());

  db.collection('calls')
  .insertMany(docs, function(err, result) {
    if (err) throw err;
    console.log('Inserted docs:', result.insertedCount);
    client.close();

    var endTime = performance.now();

    let mia = `${endTime - startTime} msec\n`;
  
    console.log(mia);
  
    fs.appendFile('Inserimento25.txt', mia, (err) => {
      if (err) throw err;
    });
    
  });

});