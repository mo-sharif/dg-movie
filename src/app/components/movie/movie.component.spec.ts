import { Movie } from "src/app/models/movies";
import { Observable, of as observableOf, throwError } from "rxjs";
import { MoviesService } from "src/app/services/movies.service";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MovieComponent } from "./movie.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

class MockMyService {
  public movie = { test: "test" };
  public getMovieDetails(): Observable<any> {
    return observableOf(this.movie);
  }
}

describe("MovieComponent", () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let moviesService: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      providers: [
        {
          provide: MoviesService,
          useClass: MockMyService
        }
      ],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.get(MoviesService);
    fixture.detectChanges();
  });
});
