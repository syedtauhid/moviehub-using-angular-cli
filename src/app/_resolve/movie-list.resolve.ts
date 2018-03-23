import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../_services/index";

@Injectable()
export class MoviesListResolve implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // return localStorage.getItem("movies") == null ? this.dataService.getAllMovies() : localStorage.getItem("movies");
    return this.dataService.getAllMovies();
  }
}
