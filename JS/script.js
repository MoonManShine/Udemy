const number0films = prompt("Сколько фильмов вы уже посморели?", "");

const personalMovieDB = {
    count : number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("Насколько его оцените?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("Насколько его оцените?", ""); 
personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);