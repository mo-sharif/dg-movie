const movieName = "Batman";
const baseApiUrl = "http://omdbapi.com/?apikey=e9ee62ed";

export const environment = {
  production: true,
  initialMovie: movieName,
  baseApi: `${baseApiUrl}`,
  moviesApi: `${baseApiUrl}&s=${movieName}`,
  baseImbdUrl: "https://www.imdb.com/title"
};
