import { loadMovie, loadMovies } from './js/movies.js';

let div = document.querySelector('.picture-container');
let listItem;
let modal = document.querySelector('.cinema-modal');

async function displayCards() {
  // let res = await fetch('src/movies.json');
  // let data = await res.json();
  // listItem = data.movies;

  let movies = await loadMovies();
  movies = movies.map(movie => movie.attributes); 
  movies.forEach(movie => {
    let img = document.createElement('img');
    img.setAttribute('src', movie.image.url);
    img.setAttribute('alt', 'poster of the movie');
    img.classList.add('cards');
    div.append(img);

    //elements in modal
    img.addEventListener('click', function () {
      document.querySelector('.modal-container').classList.add('show');

      let modalBlock = document.createElement('div');
      modal.append(modalBlock);

      modalPoster = document.createElement('img');
      modalPoster.setAttribute('src', movie.posterImageUrl);
      modalPoster.classList.add('cards-modal');
      modalScenePoster = document.createElement('img');
      modalScenePoster.setAttribute('src', movie.movieSceneImageUrl);

      let textContainer1 = document.createElement('div');
      textContainer1.classList.add('text-container');
      let textContainer2 = document.createElement('div');
      textContainer2.classList.add('text-container');
      let textContainer3 = document.createElement('div');
      textContainer3.classList.add('text-container');
      let textContainer4 = document.createElement('div');
      textContainer4.classList.add('text-container');
      let textContainer5 = document.createElement('div');
      textContainer5.classList.add('text-container');
      let textContainer6 = document.createElement('div');
      textContainer6.classList.add('text-container');
      let textContainer7 = document.createElement('div');
      textContainer7.classList.add('text-container');
      let textContainer8 = document.createElement('div');
      textContainer8.classList.add('text-container');
      let textContainer9 = document.createElement('div');
      textContainer9.classList.add('text-container');
      let textContainer10 = document.createElement('div');
      textContainer10.classList.add('text-container');
      modalBlock.append(
        modalPoster,
        modalScenePoster,
        textContainer1,
        textContainer2,
        textContainer3,
        textContainer4,
        textContainer5,
        textContainer6,
        textContainer7,
        textContainer8,
        textContainer9,
        textContainer10
      );

      let title = (document.createElement('div').innerText = movie.title);

      let genre = (document.createElement('div').innerText =
        'genre: ' + movie.genre);
      let year = (document.createElement('div').innerText =
        'År: ' + movie.year);
      let length = (document.createElement('div').innerText =
        'Längd (minuter): ' + movie.length);
      let ageLimit = (document.createElement('div').innerText =
        'Åldersgräns: ' + movie.ageLimit);
      let description = (document.createElement('div').innerText =
        movie.description);

      let actors = (document.createElement('div').innerText =
        'Skådespelare: ' + movie.actors);
      let director = (document.createElement('div').innerText =
        'Regissör: ' + movie.director);
      let language = (document.createElement('div').innerText =
        'Språk: ' + movie.language);
      let rating = (document.createElement('div').innerText =
        'Betyg: ' + movie.rating);

      let tagButton = document.createElement('a');
      let button = document.createElement('button');
      button.innerText = 'Boka';
      button.classList.add('book-movie');
      tagButton.setAttribute('href', 'pages/booking.html');
      tagButton.append(button);

      textContainer1.append(title);
      textContainer2.append(genre);
      textContainer3.append(year);
      textContainer4.append(length);
      textContainer5.append(ageLimit);
      textContainer6.append(description);
      textContainer7.append(actors);
      textContainer8.append(director);
      textContainer9.append(language);
      textContainer10.append(rating);
      modalBlock.append(tagButton);

      window.addEventListener('click', function (ev) {
        if (ev.target === document.querySelector('.modal-container')) {
          modalBlock.remove();
          document.querySelector('.modal-container').classList.remove('show');
        }
      });
    });
  });
}
displayCards();
