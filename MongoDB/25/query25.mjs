import { MongoClient } from 'mongodb';
import fs from 'fs';

const url = "mongodb://127.0.0.1:27017/";

const cell = 100;
const city = "V";
const startcall = 1660000000;
const phone = "700";
const lastname = "S";

//query 1
for(var y = 0; y < 31; y ++) {
  
  var startTime = performance.now();

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("CallsRecord25");
    const query = { "Calls_done.Cell_site": { $gt: cell } };

    dbo.collection("calls").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    })

    var endTime = performance.now();

    let mia = `${endTime - startTime} msec\n`;
  
    fs.appendFile('Query1-25.txt', mia, (err) => {
      if (err) throw err;
    });
  });
}

//query 2
for(var y = 0; y < 31; y ++) {
  
  var startTime = performance.now();

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("CallsRecord25");
    const query = { "Calls_done.Cell_site": { $gt: cell }, "Calls_done.City": { $gt: city } };

    dbo.collection("calls").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    })

    var endTime = performance.now();

    let mia = `${endTime - startTime} msec\n`;
  
    fs.appendFile('Query2-25.txt', mia, (err) => {
      if (err) throw err;
    });
  });
}

//query 3
for(var y = 0; y < 31; y ++) {
  
  var startTime = performance.now();

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("CallsRecord25");
    const query = { "Calls_done.Cell_site": { $gt: cell }, "Calls_done.City": { $gt: city }, "Calls_done.Call_start": { $gt: startcall } };

    dbo.collection("calls").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    })

    var endTime = performance.now();

    let mia = `${endTime - startTime} msec\n`;
  
    fs.appendFile('Query3-25.txt', mia, (err) => {
      if (err) throw err;
    });
  });
}

//query 4
for(var y = 0; y < 31; y ++) {
  
  var startTime = performance.now();

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("CallsRecord25");
    const query = { "Calls_done.Cell_site": { $gt: cell }, "Calls_done.City": { $gt: city }, "Calls_done.Call_start": { $gt: startcall }, "Phone_number": { $gt: phone } };

    dbo.collection("calls").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    })

    var endTime = performance.now();

    let mia = `${endTime - startTime} msec\n`;
  
    fs.appendFile('Query4-25.txt', mia, (err) => {
      if (err) throw err;
    });
  });
}

//query 5
for(var y = 0; y < 31; y ++) {
  
  var startTime = performance.now();

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("CallsRecord25");
    const query = { "Calls_done.Cell_site": { $gt: cell }, "Calls_done.City": { $gt: city }, "Calls_done.Call_start": { $gt: startcall }, $or: [ { "Phone_number": { $gt: phone } }, { "Last_name": { $gt: lastname } } ] };

    dbo.collection("calls").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    })

    var endTime = performance.now();

    let mia = `${endTime - startTime} msec\n`;
  
    fs.appendFile('Query5-25.txt', mia, (err) => {
      if (err) throw err;
    });
  });
}