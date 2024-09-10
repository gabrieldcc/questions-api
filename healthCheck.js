const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => { // Note que aqui deve ser '/' em vez de '/health'
  const dbState = mongoose.connection.readyState;

  if (dbState === 1) {
    res.status(200).send({ status: 'ok', database: 'connected' });
  } else {
    res.status(500).send({ status: 'error', database: 'disconnected' });
  }
});

module.exports = router;
