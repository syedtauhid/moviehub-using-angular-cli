import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../_services/index";

@Injectable()
export class MoviesLinkResolve implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    //   route.paramMap.get('id') 
    // return localStorage.getItem("links") == null ? this.dataService.getAllMovies() : localStorage.getItem("links");
    return this.dataService.getAllMovieLinks();
  }
}
