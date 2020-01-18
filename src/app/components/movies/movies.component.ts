import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "src/app/models/movies";
import { environment } from "../../../environments/environment";
import { MovieDetails } from "src/app/models/movie-details";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.sass"]
})
export class MoviesComponent implements OnInit {
  constructor(public moviesService: MoviesService) {}

  public movies$: Observable<Movie[]>;
  public movieId$: Observable<MovieDetails>;
  public imdbIDList: String[];

  public movieName: string = environment.initialMovie;

  ngOnInit() {
      /* Get a list of movies */
    this.movies$ = this.moviesService.getMovies().pipe(map(res => res.Search));
  }
}
