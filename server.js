const http = require('http');

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");

    res.statusCode = 200;
    const {method} = req;

    if (method === 'GET') {
        res.end(`<h1>Hello, HTTP Server! [GET]</h1>`);
    }

    if (method === 'POST') {
        res.end(`<h1>Hello, HTTP Server! [POST]</h1>`);
    }

    if (method === 'PUT') {
        res.end(`<h1>Hello, HTTP Server! [PUT]</h1>`);
    }

    if (method === 'DELETE') {
        res.end(`<h1>Hello, HTTP Server! [DELETE]</h1>`);
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});