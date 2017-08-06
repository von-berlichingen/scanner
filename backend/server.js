'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process');

module.exports = function() {
  express()
  .set('views', 'frontend')
  .use(express.static('frontend'))
  .use(express.static('node_modules'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', function (req, res) {
    res.render('index');
  })
  .post('/', function(req, res) {
    var scan = req.body;

    console.log(scan);
    exec.exec(`${__dirname}/scripts/script.sh`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stderr: ${stderr}`);
    });

    switch (scan.scanType) {
      case 'sslabs':
        res.json({
          response: 'ok',
          type: scan.scanType
        })
        break;
      case 'sslvuln':
      res.json({
        response: 'ok',
        type: scan.scanType
      })
        break;
      case 'ws':
        res.json({
          response: 'ok',
          type: scan.scanType
        })
        break;

      case 'nikto':
        res.json({
          response: 'ok',
          type: scan.scanType
        })
        break;

      case 'all':
        res.json({
          response: 'ok',
          type: scan.scanType
        })
        break;
    }
  })
  .listen(3000, function() {
    console.log('Running on port 3000');
  });
};
