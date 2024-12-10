let number0films;

function start () {
    number0films = prompt("Сколько фильмов вы уже посморели?", "");

    while (number0films == '' || number0films == null || isNaN(number0films)) {
        number0films = prompt("Сколько фильмов вы уже посморели?", "");
    }
}

start();

const personalMovieDB = {
    count : number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("Насколько его оцените?", ""); 
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies [a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();