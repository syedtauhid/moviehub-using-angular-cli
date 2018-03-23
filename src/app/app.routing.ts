import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GenresDetailsComponent } from "./genres-details/genres-details.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesListResolve, MoviesLinkResolve } from './_resolve/index';

const routes: Routes = [
  {
    path: "movies",
    component: HomeComponent,
    resolve: { movies: MoviesListResolve, links: MoviesLinkResolve }
  },
  {
    path: "genre/:id",
    component: GenresDetailsComponent
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MoviesListResolve,
    MoviesLinkResolve
  ]
})

export class AppRoutingModule {}
