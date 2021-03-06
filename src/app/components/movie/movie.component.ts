import { Component, Input, OnInit } from "@angular/core";
import { fadeIn } from "../../animations/fade-in.animation";
import { Movie } from "src/app/models/movies";
import { MoviesService } from "src/app/services/movies.service";
import { Observable } from "rxjs";
import { MovieDetails } from "src/app/models/movie-details";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.sass"],
  animations: [fadeIn]
})
export class MovieComponent implements OnInit {
  
  @Input() movie: Movie;

  public movieDetails$: Observable<MovieDetails>;
  public baseImbdUrl: string = environment.baseImbdUrl;
  
  constructor(public moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovieDetails(this.movie.imdbID);
  }

  /* Get movie details by imdbID */
  getMovieDetails = imdbID => {
    this.movieDetails$ = this.moviesService
      .getMovieDetails(imdbID)
      .pipe(map(res => res));
  };
}
