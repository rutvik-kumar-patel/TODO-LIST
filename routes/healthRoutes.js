const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
    res.status(200).send({ message: 'PONG' });
});

module.exports = router;
