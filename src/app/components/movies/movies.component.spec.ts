/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { MoviesService } from "../../services/movies.service";

class MockMoviesService extends MoviesService {
}

describe('Component: Login', () => {

    let component: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;
    let testBedService: MoviesService ;
    let componentService: MoviesService;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [MoviesComponent],
            providers: [MoviesService]
        });

        // Configure the component with another set of Providers
        TestBed.overrideComponent(
            MoviesComponent,
            { set: { providers: [{ provide: MoviesService, useClass: MockMoviesService }] } }
        );

        // create component and test fixture
        fixture = TestBed.createComponent(MoviesComponent);

        // get test component from the fixture
        component = fixture.componentInstance;

        // MoviesService provided to the TestBed
        testBedService = TestBed.get(MoviesService);

        // MoviesService provided by Component, (should return MockMoviesService)
        componentService = fixture.debugElement.injector.get(MoviesService);
    });

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([MoviesService], (injectService: MoviesService) => {
            expect(injectService).toBe(testBedService);
        })
    );

    it('Service injected via component should be and instance of MockMoviesService', () => {
        expect(componentService instanceof MockMoviesService).toBeTruthy();
    });
});