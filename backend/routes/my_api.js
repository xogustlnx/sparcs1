const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/load', async (req, res, next) => {
    const message = await Message.findOne().sort({ _id: -1 })
        .then(res => res ? res.message : '')
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    await res.json({message});
});

/*
router.get('/reset', async(req, res, next) => {
    await Message.deleteMany({}, (err, _) => console.log(err));
    await res.json({ok: true});
})
*/

router.post('/save', async (req, res, next) => {
    const myMessage = new Message({ message: req.body.message });
    const messageId = await Message.create(myMessage)
        .then(item => item.id)
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    console.log(`New message added: ${messageId}`);
    await res.sendStatus(200);
});

module.exports = router;
