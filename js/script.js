"use strict";

const numberOfFilms = +prompt("How many movies did you watch?", 1);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of the last movies seen?"),
  b = prompt("How much do you appreciate?"),
  c = prompt("One of the last movies seen?"),
  d = prompt("How much do you appreciate?");

personalMovieDB["movies"][a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);