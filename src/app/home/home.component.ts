import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PapaParseService } from "ngx-papaparse";
import { DataService } from "../_services/index";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})

export class HomeComponent implements OnInit {
  movieList: any;
  movieLinks: any;
  genresList: any = [];
  tmdbPosterPath:string = "https://image.tmdb.org/t/p/w300";

  constructor(private route: ActivatedRoute, private papa: PapaParseService, private dataService: DataService) {}

  ngOnInit() {
    this.movieList = this.route.snapshot.data.movies;
    this.movieLinks = this.route.snapshot.data.links;
    this.parseCSVData();
    this.parseGenres();
  }

  parseCSVData() {
    this.papa.parse(this.movieList, {
      header: true,
      dynamicTyping: true,
      complete: result => this.movieList = result.data
    });
    this.papa.parse(this.movieLinks, {
      header: true,
      dynamicTyping: true,
      complete: result => this.movieLinks = result.data
    });
  }
  
  parseGenres() {
    for (let i = 0; i < this.movieList.length; i++) {
      let movie = this.movieList[i];
      let geners = movie.genres;
      if(geners && geners.includes("|")) {
        let generes = geners.split("|");
        let vm = this;
        generes.forEach(function (value) {
          vm.addMovieToGenres(movie.movieId, value)
        });
      }
      movie["posterImg"] = "";
    }
  }

  addMovieToGenres(movieId, genere) {
    if(this.genresList[genere]) {
      this.genresList[genere].push(movieId);
    } else {
      this.genresList[genere] = [];
      this.genresList[genere].push(movieId);
    }
  }

  getMovieById(movieId) {
    movieId = Number(movieId);
    let movieAtIndex = this.movieList[movieId-1];
    if(movieAtIndex && movieAtIndex.movieId == movieId)
      return movieAtIndex;
    for(let i in this.movieList) {
      movieAtIndex = this.movieList[i];
      if(movieAtIndex.movieId == movieId)
        return movieAtIndex;
    }
    return null;
  }

  getTmdbIdByMovieId(movieId) {
    movieId = Number(movieId);
    let movieAtIndex = this.movieLinks[movieId-1];
    if(movieAtIndex && movieAtIndex.movieId == movieId)
      return movieAtIndex.tmdbId;
    for(let i in this.movieLinks) {
      movieAtIndex = this.movieLinks[i];
      if(movieAtIndex.movieId == movieId)
        return movieAtIndex.tmdbId;
    }
    return 0;
  }

  prepareRandomMovies(genre) {
    let array = this.genresList[genre];
    let max = array.length - 1;
    let selectedMovieIDs = [], selectedMovies = [];
    for(let i = 0; i < 3; i++) {
      let rand = this.getRandomNumber(max);
      let movieId = array[rand];
      if(selectedMovieIDs.indexOf(movieId) == -1) {
        let movie = this.getMovieById(movieId);
        if(movie) {
          selectedMovieIDs.push(movieId);
          selectedMovies.push(movie);
        }
      } else {
        i--;
      }
    }
    this.fetchMovieDataFromTmdb(selectedMovies);
    return selectedMovies;
  }

  fetchMovieDataFromTmdb(selectedMovies) {
    for(let i = 0; i < selectedMovies.length; i++)
      this.getPosterImage(selectedMovies[i]);
  }

  getPosterImage(movie) {
    let movieId = movie.movieId;
    let tmdbId = this.getTmdbIdByMovieId(movieId);
    if(movie.posterImg) return movie.posterImg;
    this.dataService.getMovieDetails(tmdbId).subscribe(
      data => {
        movie.posterImg = this.tmdbPosterPath + data["poster_path"];
      },
      error => {
        console.log(error);
      });
  }

  getRandomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
  }


}
