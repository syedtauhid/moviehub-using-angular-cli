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

  constructor(private route: ActivatedRoute,  private router: Router) {
    this.route.params.subscribe(res => this.genreId = res.id);
  }

  ngOnInit() {
    
  }

  gotoMovieDetails(movieId: string) {
    this.router.navigate(['movie', movieId]);
  }
}
