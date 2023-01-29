import request from 'supertest'; //funktion from jest
import { loadMovie } from '../js/movies.js';
import app from '../js/app.js';

test('First movie page returns HTML containing its title matching its id', async () => {
    const movie = await loadMovie(1);
    const response = await request(app)
    .get('/movies/' + movie.id)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);
  expect(response.text.includes(movie.title)).toBeTruthy();
  });
