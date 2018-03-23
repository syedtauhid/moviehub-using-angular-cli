import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PapaParseService } from "ngx-papaparse";
import { DataService } from "../_services/index";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movieList: any;
  movieLinks: any;
  genres: any = [];

  constructor(private route: ActivatedRoute, private papa: PapaParseService) {}

  ngOnInit() {
    this.movieList = this.route.snapshot.data.movies;
    this.movieLinks = this.route.snapshot.data.links;
    this.parseCSVData();
    
  }

  parseCSVData() {
    this.papa.parse(this.movieList, {
      header: true,
      dynamicTyping: true,
      complete: result => this.movieList = result.data
    });
    this.papa.parse(this.movieList, {
      header: true,
      dynamicTyping: true,
      complete: result => this.movieList = result.data
    });
  }


}
