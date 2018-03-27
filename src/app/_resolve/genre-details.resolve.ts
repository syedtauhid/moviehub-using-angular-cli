import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../_services/index";

@Injectable()
export class GenreDetailsResolve implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    console.log(id);
    return this.dataService.getGenreDetails(id);
  }
}
