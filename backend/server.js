'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process');

module.exports = function() {
  express()
  .set('views', 'frontend')
  // .use(express.static(path.join(__dirname + 'frontend')))
  .use(express.static('frontend'))
  .use(express.static('node_modules'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', function (req, res) {
    res.render('index');
  })
  .get('/chuck', function(req, res) {
    res.json({
      name: 'Chuck Norris',
      job: 'badass'
    });
  })
  .post('/home', function(req, res) {
    exec.exec(`${__dirname}/scripts/script.sh`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);


      console.log(req.body);
      res.json({
        response: 'ok'
      })
    });
  })
  .listen(3000, function() {
    console.log('Running on port 3000');
  });
};
