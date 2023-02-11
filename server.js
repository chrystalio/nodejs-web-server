const http = require('http');

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");

  res.statusCode = 200;
  res.end(`<h1>Hello, HTTP Server!</h1>`);
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});GOIT