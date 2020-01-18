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

  public getMovies = (): Observable<any> => {
    return this.http
      .get<Movies>(environment.moviesApi)
      .pipe(shareReplay(), take(1));
  };

  public getMovieDetails = (imdbID): Observable<any> => {
    return this.http
      .get<MovieDetails>(`${environment.baseApi}&i=${imdbID}`)
      .pipe(shareReplay(), take(1));
  };
}
