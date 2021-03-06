const express = require('express');
const Hotel = require('../database/Model.js');
const controller = require('../database/Controller.js');

const app = express();
const port = 3002;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.status(200).send("let's get this party started!");
});

app.get('/api/bookings/:id', (req, res) => {
  const { params } = req;

  controller.getOne(params.id, (err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send('something went wrong');
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/api/bookings', (req, res) => {
  controller.getAll((err, results) => {
    if (err) {
      console.error(err);
      res.status(400).send('something went wrong');
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
