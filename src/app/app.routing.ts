import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GenresDetailsComponent } from "./genres-details/genres-details.component";

const routes: Routes = [
  {
    path: "movies",
    component: HomeComponent
  },
  {
    path: "genre/:id/movies",
    component: GenresDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
