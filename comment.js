// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});

/* This code creates a new server that listens 
on port 3000 and responds with “Hello World” to all requests. 
You can run this server by saving the code to a file and running it with Node.js.
When the server is running, you can visit http://127.0.0.1:3000/ in 
your web browser to see the message “Hello World”.*/