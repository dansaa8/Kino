import express from 'express';
import { loadMovie, loadMovies } from './js/movies.js';
import * as url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log(__dirname);

const app = express();

// app.engine("ejs", engine({
//   helpers: {
//     markdown: md => marked(md),
//   },
// }));
app.set('view engine', 'ejs');

app.use(express.static('static'));


// Main navigation routes
app.get('/', async (req, res) => {
  let movies = await loadMovies();
  movies = movies.map(movie => movie.attributes); 
  res.render('index', {title: 'Lule Northern Lights Cinema', movies});
});
app.get('/oppettider', async (req, res) => {
  res.render('openingHours', {title: 'Öppettider'});
});
app.get('/om-oss', async (req, res) => {
  res.render('about', {title: 'Om oss'});
});
app.get('/biljettinfo', async (req, res) => {
  res.render('ticket-info', {title: 'Biljettinfo'});
});
app.get('/nyhetsbrev', async (req, res) => {
  res.render('newsletter', {title: 'Nyhetsbrev'});
});
app.get('/presentkort', async (req, res) => {
  res.render('giftCard', {title: 'Presentkort'});
});

// SecNav - Repertoar routes
app.get('/hela-bioprogrammet', async (req, res) => {
  res.render('wholeProgramPage', {title: 'Hela Bioprogrammet'});
});
app.get('/kommande-premiarer', async (req, res) => {
  res.render('upcoming', {title: 'Kommande Premiärer'});
});
app.get('/matine', async (req, res) => {
  res.render('matiné', {title: 'Matiné'});
});

// SecNav - Bar & Bistro
app.get('/bistro-meny', async (req, res) => {
  res.render('bistro-menu', {title: 'Meny'});
});
app.get('/premiarfredagar', async (req, res) => {
  res.render('premiereFriday', {title: 'Premiärfredagar'});
});

// Click on movie
app.get('/movies/:movieId', async (req, res) => {
  let movie = await loadMovie(req.params.movieId);
  if (movie) {
    movie = movie.attributes;
    console.log(movie);
    res.render('movie', {title: movie.title, movie });
  } else {
    res.status(404).render('404');
  }
});

// app.get("/movies/:movieId", async (req, res) => {
//   const movie = await loadMovie(req.params.movieId);
//   console.log(movie);
//   if (movie) {
//     res.render("movie", { movie });
//   } else {
//     res.status(404).render("404");
//   }
// });

//första parametern är url, andra parametern är pathen där de statiska filerna ligger.
// app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/public', express.static('./public'));
app.use('/pages', express.static('./pages'));
app.use('/js', express.static('./js'));
app.listen(5080);
