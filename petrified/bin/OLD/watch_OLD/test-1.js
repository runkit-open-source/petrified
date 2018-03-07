console.log("hello", Date.now())
const cluster = require('cluster');
const http = require('http');
const numCPUs = 2;//require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
    console.log(Date.now());
  console.log(`Worker ${process.pid} started`);
}