import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-genres-details",
  templateUrl: "./genres-details.component.html",
  styleUrls: ["./genres-details.component.scss"]
})
export class GenresDetailsComponent implements OnInit {
  genreId: string;
  genresDetails: any;
  tmdbPosterImgEndpoint:string = "https://image.tmdb.org/t/p/w185";
  

  constructor(private route: ActivatedRoute,  private router: Router) {
    this.route.params.subscribe(res => this.genreId = res.id);
  }

  ngOnInit() {
    this.genresDetails = this.route.snapshot.data.details;
  }

  preparePosterImgPath(path) {
    return this.tmdbPosterImgEndpoint + path;
  }

  gotoMovieDetails(movieId: string) {
    this.router.navigate(['movie', movieId]);
  }
}
