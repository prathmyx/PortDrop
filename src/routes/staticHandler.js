const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../../public/');
const fileTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
}

function handleStaticRoutes(res, req) {
    let reqURL = req.url === '/' ? '/index.html' : req.url;
    let filePath = path.join(publicDir, reqURL);
    let ext = path.extreme(filePath).toLowerCase();

    if (!fileTypes[ext]) return false;

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/plain'});
            res.end('404 Not Found');
        } else {
            res.writeHead(200, {'Content-Type' : fileTypes[ext]});
            res.end(content);
        }
    });

    return true;
}

module.exports = handleStaticRoutes;