const http = require('http');

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");

    res.statusCode = 200;
    const {method, url} = req;

    if (url === '/') {
        if (method === 'GET') {
            res.end(`<h1>Halo! Ini adalah halaman home</h1>`);
        } else {
            res.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }

    if (url === '/about') {
        if (method === 'GET') {
            res.end(`<h1>Halo! Ini adalah halaman about</h1>`);
        } else if (method === 'POST') {
        }

        if (url === '/about') {
            if (method === 'GET') {
                res.end(`<h1>Halo! Ini adalah halaman about</h1>`);
            } else if (method === 'POST') {
                let body = [];

                req.on('data', (chunk) => {
                    body.push(chunk);
                });

                req.on('end', () => {
                    body = Buffer.concat(body).toString();
                    const {name} = JSON.parse(body);
                    res.end(`<h1>Hello, ${name}! Ini adalah halaman about</h1>`);
                });
            } else {
                res.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
            }
        } else {
            res.end(`<h1>Halaman Tidak Ditemukan!</h1>`)
        }
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});