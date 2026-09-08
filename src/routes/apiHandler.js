const EventEmitter = require('events');

const messageEmitter = new EventEmitter();
messageEmitter.setMaxListeners(10);

function handleAPIRoutes(req, res) {
    if (req.url == '/api/v1/send-text' && req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log("New Message:", body);

            payload = {text: body, timestamp: Date.now()};

            messageEmitter.emit('newMessage', payload);
            res.writeHead(200, {"Content-Type": 'application/json'});
            res.end(JSON.stringify({status: 'success'}));
        })

        return true;
    }
    return false;
}

module.exports = {handleAPIRoutes, messageEmitter};