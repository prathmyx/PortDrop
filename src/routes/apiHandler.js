function handleAPIRoutes(req, res) {
    if (req.url == '/api/v1/send-text' && req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.data('end', () => {
            console.log("Received Text:", body);
            res.writeHead(200, {"Content-Type": 'application/json'});
            res.json({status: 'success'});
        })

        return true;
    }
    return false;
}

module.exports = handleAPIRoutes;