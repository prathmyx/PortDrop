const http = require('http');
const os = require('os');

const handleStaticRoutes = require('./routes/staticHandler.js');
const PORT = 5000;

function getLocalIPAddress() {
    let interfaces = os.networkInterfaces();

    for (let interfaceName of Object.keys(interfaces)) {
        for (let net of interfaces[interfaceName]) {

            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';
}

const server = http.createServer((req, res) => {
    if (handleStaticRoutes(req, res)) return;

    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Page Not Found');
})

server.listen(
    {
    port: PORT,
    host: '0.0.0.0'
    },
    () =>  {
        console.log(`Server listening at http://localhost:${PORT}`);
        console.log(`Network Access: http://${getLocalIPAddress()}:${PORT}`);
    }
);