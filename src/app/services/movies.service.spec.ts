import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MoviesService } from "./movies.service";
import { TestBed } from "@angular/core/testing";

describe("MoviesService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it("should be created", () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
});
