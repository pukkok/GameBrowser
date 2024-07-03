const { sendMessage } = require('./sse')

module.exports = (req, res) => {
    const { message } = req.body;
    sendMessage(message);
    res.status(200).json({ status: 'Message sent' });
};