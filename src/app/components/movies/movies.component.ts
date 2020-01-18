import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IMovie, IMovies } from "src/app/models/movies";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.sass"]
})
export class MoviesComponent implements OnInit {
  constructor(public moviesService: MoviesService) {}
  public movies$: Observable<IMovie[]>;

  ngOnInit() {
    this.movies$ = this.moviesService.getMovies().pipe(map(res => res.Search));
  }
}
