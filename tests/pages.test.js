import request from 'supertest'; //funktion from jest
import { loadMovies } from '../js/movies.js';

import app from '../js/app.js';
// test('home page shows list of movies', async () => {
//     const response = await request(app)
//     .get('/movies/1')
//     .expect('Content-Type', 'text/html; charset=utf-8')
//     .expect(200);

//     expect(response.text.includes("Isle")).toBeTruthy();
// });

// test('Encanto page returns Encanto info', async () => {
//     const response = await request(app)
//     .get('/movies/2')
//     .expect('Content-Type', 'text/html; charset=utf-8')
//     .expect(200)

//     expect(response.text.includes('Encanto')).toBeTruthy();
//     expect(response.text.includes('Shawshank')).toBeFalsy();
// });

// test('Every movie page contains title in the the HTML', async() => {
//     const movies = await loadMovies();
//     movies.forEach(async movie => {
//         const response = await request(app)
//         .get('/movies' + movie.id)
//         .expect('Content-Type', 'text/html; charset=utf-8')
//         .expect(200);

//         expect(response.text.includes(movie.title)).toBeTruthy();
//     });
// })

const movies = await loadMovies();
test.each(movies)('Every movie page contains title in the the HTML', async() => {

        const response = await request(app)
        .get('/movies' + movie.id)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200);

        expect(response.text.includes(movie.title)).toBeTruthy();

})