//const number = 5;
//let a = 10;
//console.log (a);

let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");
console.log (numberOfFilms);

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};



for (let i=0; i<2; i++) {
        let film = prompt("Один из последних просмотренных фильмов?");
        let markFilm = prompt("На сколько оцените его?"); 

        if (film != "" && markFilm != "" && film != null && markFilm != null && film.length < 50 && markFilm.length<50)
        {
        personalMovieDB.movies[film] = markFilm;
        }
        else {
                i--;
        }
}

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




console.log(personalMovieDB);




