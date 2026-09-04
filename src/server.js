const http = require('http');

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
    () => console.log(`Server listening at http://localhost/${PORT}`)
);