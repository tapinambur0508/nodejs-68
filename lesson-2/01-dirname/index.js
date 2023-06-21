const movies = require("./movies");

movies
  .readMovies()
  .then((movie) => console.log(movie))
  .catch((error) => console.error(error));
