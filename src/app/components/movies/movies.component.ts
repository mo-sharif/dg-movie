import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Movie } from "src/app/models/movies";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.sass"]
})
export class MoviesComponent implements OnInit {
  constructor(public moviesService: MoviesService) {}

  public movies$: Observable<Movie[]>;
  public movieName: string = environment.initialMovie;
  public filterNewMovies: boolean = true;
  public filterOldMovies: boolean = false;

  ngOnInit() {
    /* Get a list of movies */
    this.movies$ = this.moviesService
      .getMovies()
      .pipe(map(movies => this.sortMoviesByYear(movies.Search)));
  }

  /* Sort movie list by year */
  sortMoviesByYear = movies => {
    return movies.sort((a, b) => {
      if (a.Year < b.Year) {
        return 1;
      }
      if (a.Year > b.Year) {
        return -1;
      }
    });
  };

  /* Filtering movies based on checked checkboxes and released year from movies */
  filterMovieByYear = year => {
    if (!this.filterNewMovies && this.filterOldMovies) {
      return year < 2000 ? true : false;
    }
    if (this.filterNewMovies && !this.filterOldMovies) {
      return year > 2000 ? true : false;
    }
    return true
  }
}
