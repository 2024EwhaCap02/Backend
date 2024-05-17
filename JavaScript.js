const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Set-Cookie': 'id=1',
        'Content-Type': 'text/html; charset=utf-8',
    });

    console.log(req.headers.cookie); // id=1
    res.end(`<h1>User ID is ${req.headers.cookie.split('=')[1]}</h1>`);

}).listen(3000);

/*const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello World! �ȳ�!</h1>');
    res.end();
}).listen(3000);*/

/*const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>�ȳ�, ����!</h1>');
    res.end();
}).listen(3000);*/