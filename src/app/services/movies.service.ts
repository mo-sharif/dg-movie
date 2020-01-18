import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Movies, Movie } from "../models/movies";
import { Injectable } from "@angular/core";
import { shareReplay, take, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { MovieDetails } from "../models/movie-details";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  /*  Get a list of all batman movies
   Cache and take ony once to increase  performance */
  public getMovies = (): Observable<any> => {
    return this.http
      .get<Movies>(environment.moviesApi)
      .pipe(shareReplay(), take(1));
  };

  /*  Get get more details about a given movie by imdbID 
      Cache and take ony once to increase  performance */
  public getMovieDetails = (imdbID): Observable<any> => {
    return this.http
      .get<MovieDetails>(`${environment.baseApi}&i=${imdbID}`)
      .pipe(shareReplay(), take(1));
  };
}
