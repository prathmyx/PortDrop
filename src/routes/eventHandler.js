const {messageEmitter} = require('./apiHandler.js');

function eventsRoute(req, res) {
    if (req.url !== '/events') return false;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const onNewMessage = (payload) => {
        res.write(`data: ${JSON.stringify(payload)}\n\n`);
    }
    messageEmitter.on('newMessage', onNewMessage);

    req.on('close', () => 
        messageEmitter.removeListener('newMessage', onNewMessage)
    )

    return true;
}

module.exports = eventsRoute;