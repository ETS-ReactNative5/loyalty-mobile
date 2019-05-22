'use strict'

const express = require('express');
const router = express.Router();
const jsonHandler = require('../handler/jsonHandler');
const {accessToken} = require('../handler/accessHandler');

router.get('/', accessToken, (req, res, next) => {
  jsonHandler.read('./data/appData.json', (data) => {
    res.status(200).json(JSON.parse(data));
  })
});

module.exports = router;

