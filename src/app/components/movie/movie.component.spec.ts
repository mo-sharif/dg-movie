import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieComponent } from "./movie.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MoviesService } from "src/app/services/movies.service";

describe("MovieComponent", () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
