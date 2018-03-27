import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router, NavigationEnd } from "@angular/router";
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
  relatedMovies: any = [];
  embeddedUrl: string;
  ratingStar: String = "★";
  movieDetails: any;
  tmdbPosterImgEndpoint: string = "https://image.tmdb.org/t/p/w342";
  tmdbProfileImgEndpoint: string = "https://image.tmdb.org/t/p/w92";
  tmdbBackdropImgEndpoint: string = "https://image.tmdb.org/t/p/w1280";
  noImgUrl: string = "assets/no-img.jpg";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.overrideRouteReUseStrategy();
  }

  ngOnInit() {
    this.movieDetails = this.route.snapshot.data.details;
    this.getMovieRelatedInfo();
  }

  processCastAndCrewData(data) {
    this.casts = data["cast"];
    this.crews = data["crew"];
    this.director = this.crews.shift();
    if (this.casts.length > 50) this.casts = this.casts.slice(0, 49);
    if (this.crews.length > 50) this.crews = this.crews.slice(0, 49);
  }

  gotoMovieDetails(movieId: string) {
    this.router.navigate(["movie", movieId]);
  }

  preparePosterImgPath(path) {
    return path ? this.tmdbPosterImgEndpoint + path : this.noImgUrl;
  }

  prepareCoverImgPath(path) {
    return path ? this.tmdbBackdropImgEndpoint + path : this.noImgUrl;
  }

  prepareDirectorImg(path) {
    return path ? this.tmdbProfileImgEndpoint + path : this.noImgUrl;
  }

  getMovieRelatedInfo() {
    this.dataService
      .getCrewDetails(this.movieDetails.tmdbId)
      .subscribe(
        data => this.processCastAndCrewData(data),
        error => console.log(error)
      );

    this.dataService.getTrailerVideo(this.movieDetails.tmdbId).subscribe(
      data => {
        if (data["results"].length)
          this.embeddedUrl =
            "https://www.youtube.com/embed/" + data["results"][0]["key"];
      },
      error => console.log(error)
    );

    this.dataService
      .getRelatedMovies(this.movieDetails.id)
      .subscribe(
        data => (this.relatedMovies = data),
        error => console.log(error)
      );
  }

  overrideRouteReUseStrategy() {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ammountFormat(ammount) {
    if (!ammount) return "Not available";

    // Nine Zeroes for Billions
    return Math.abs(Number(ammount)) >= 1.0e9
      ? (Math.abs(Number(ammount)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
        Math.abs(Number(ammount)) >= 1.0e6
        ? (Math.abs(Number(ammount)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
          Math.abs(Number(ammount)) >= 1.0e3
          ? (Math.abs(Number(ammount)) / 1.0e3).toFixed(2) + "K"
          : Math.abs(Number(ammount));
  }

  formatSubtitle = (percent: number): string => {
    return "IMDB Rating";
  };
}
