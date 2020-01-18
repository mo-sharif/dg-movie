import { Component, Input, OnInit } from "@angular/core";
import { IMovie } from "src/app/models/movies";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.sass"]
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;
  constructor() {}

  ngOnInit() {}
}
