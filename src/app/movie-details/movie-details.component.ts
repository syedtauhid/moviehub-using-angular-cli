import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  percent:Number = 90;
  rating:String = "8.5 ★";

  constructor() { }

  ngOnInit() {
  }
  formatSubtitle = (percent: number) : string => {
      return "IMDB Rating"
  }
}
