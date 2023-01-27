import express from 'express';
import fs from 'fs/promises';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/', async (request, res) => {
  res.render('index', {title: 'Home'});
});

//första parametern är url, andra parametern är pathen där de statiska filerna ligger.
app.use('/static', express.static('./static'));
app.use('/pages', express.static('./pages'));
app.use('/js', express.static('./js'));
app.listen(5080);
