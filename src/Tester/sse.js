let clients = [];

const SSE = (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    clients.push(res);

    req.on('close', () => {
        clients = clients.filter(client => client !== res);
    });
};

const sendMessage = (message) => {
    clients.forEach(client => client.write(`data: ${message}\n\n`));
};

module.exports = {
    SSE,
    sendMessage
}