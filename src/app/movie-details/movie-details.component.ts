import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../_services/index";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  director: any = {};
  casts: any = [];
  crews: any = [];
  embeddedUrl:string;
  ratingStar: String = " ★";
  movieDetails: any;
  tmdbPosterImgEndpoint: string = "https://image.tmdb.org/t/p/w342";
  tmdbProfileImgEndpoint: string = "https://image.tmdb.org/t/p/w185";
  tmdbBackdropImgEndpoint: string = "https://image.tmdb.org/t/p/w1280";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.movieDetails = this.route.snapshot.data.details;
    this.dataService.getCrewDetails(this.movieDetails.tmdbId).subscribe(
      data => {
        this.processCastAndCrewData(data);
      },
      error => {
        console.log(error);
      }
    );

    this.dataService.getTrailerVideo(this.movieDetails.tmdbId).subscribe(
      data => {
        this.embeddedUrl = "https://www.youtube.com/embed/" + data["results"][0]["key"];
        console.log(this.embeddedUrl);
      },
      error => {
        console.log(error);
      }
    );
  }

  processCastAndCrewData(data) {
    this.casts = data["cast"];
    this.crews = data["crew"];
    this.director = this.crews.shift();
    if (this.casts.length > 50) this.casts = this.casts.slice(0, 49);
    if (this.crews.length > 50) this.crews = this.crews.slice(0, 49);
  }

  preparePosterImgPath(path) {
    return this.tmdbPosterImgEndpoint + path;
  }

  prepareCoverImgPath(path) {
    return this.tmdbBackdropImgEndpoint + path;
  }

  prepareDirectorImg(path) {
    return this.tmdbProfileImgEndpoint + path;
  }

  formatSubtitle = (percent: number): string => {
    return "IMDB Rating";
  };
}
