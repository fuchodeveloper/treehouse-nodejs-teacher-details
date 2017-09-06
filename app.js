// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer( (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('<html><body><h1>Hello, World is here!</h1></body></html>');
// });
//
// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}`);
// });


const profile = require('./profile');

const users = process.argv.slice(2);
users.forEach(profile.get);
