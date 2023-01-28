
const movies = document.querySelectorAll('.cards');

movies.forEach(movie => {
    const id = movie.id;
    movie.addEventListener('click', () => {
        window.location.replace('/movies/' + id);
    })
});
