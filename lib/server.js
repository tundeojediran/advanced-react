// const config = require('./config');
// const express = require('express');
import express from './config';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });

});

app.listen(config.port, function listenHandler() {
    console.info(`Running on ${config.port}...`);
});