import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
