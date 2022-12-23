//const number = 5;
//let a = 10;
//console.log (a);

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?");
let markFilm = prompt("На сколько оцените его?");

let movies = {
    logan: lastFilm,
    mark: markFilm
};
console.log(movies);
