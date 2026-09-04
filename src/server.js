const http = require('http');
const os = require('os');

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
    switch (req.url) {
        case '/':
            res.end("Welcome To Home Page");
            break;
        case '/post-data':
            res.end("Sending");
            break;
        default:
            res.statusCode = 404;
            res.end("Error Not Found");
    }
})

const PORT = 5000;

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