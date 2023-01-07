'use strict';

let numberOfFilms;

function start() {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");
        }
}
start();

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

function rememberMyFilms() {
        for (let i=0; i<2; i++) {
                let film = prompt("Один из последних просмотренных фильмов?");
                let markFilm = prompt("На сколько оцените его?"); 
        
                if (film != "" && markFilm !="" && film!=null && markFilm!=null && film.length<50 && markFilm.length<50)
                {
                personalMovieDB.movies[film] = markFilm;
                }
                else {
                        i--;
                }
        }  
}

rememberMyFilms();

 function detectPersonalLevel() {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
                console.log ("Просмотрено довольно мало фильмов");
        }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log ("Вы классический зритель");
        }
        else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман");
        }
        else {
                console.log ("Произошла ошибка");
        }
 }
 detectPersonalLevel();

 function showMyDb() {
        if (personalMovieDB.privat == false) {
                console.log (personalMovieDB);
        }
 }
 showMyDb();

 function writeYourGenres() {
        for (let i=0; i<3; i++){
        let num = i+1;
        let numberGenres = prompt(`Ваш любимый жанр под номером ${num}?`);
        personalMovieDB.genres[i] = numberGenres;
        }
 }

 writeYourGenres();




