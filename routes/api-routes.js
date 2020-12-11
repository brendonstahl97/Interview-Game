const db = require("../models");
const path = require('path');

module.exports = function (app) {
  //serve html on / request
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/landing.html'));
  });

  app.get('/host', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
    roomNum = Math.floor(Math.random() * 9999).toString();
  });

  app.get('/join/:roomNumber', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
    roomNum = req.params.roomNumber;
  });

  // make a job card 
  app.post("/api/jobs", function (req, res) {
    db.jobs.create(req.body).then(function (dbJob) {
      res.json(dbJob);
    });
  });

  // make a phrase card 
  app.post("/api/phrases", function (req, res) {
    db.phrases.create(req.body).then(function (dbPhrase) {
      res.json(dbPhrase);
    });
  });

};
