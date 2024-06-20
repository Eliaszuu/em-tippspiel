//Node
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//MongoDB
const { MongoClient } = require('mongodb');

const url = "mongodb://db:27017/em-tippspiel";
const client = new MongoClient(url);
const db = client.db("em-tippspiel")

db.customers.insertOne()
