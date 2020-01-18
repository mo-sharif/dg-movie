import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { IMovies } from "../models/movies";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getMovies = () => {
    return this.http.get<IMovies>(`http://omdbapi.com/?s=Batman&apikey=e9ee62ed`)
  };
}
