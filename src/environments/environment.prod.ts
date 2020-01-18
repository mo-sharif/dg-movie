const movieName = "Batman";

export const environment = {
  production: true,
  initialMovie: movieName,
  moviesApi: `http://omdbapi.com/?s=${movieName}&apikey=e9ee62ed`
};