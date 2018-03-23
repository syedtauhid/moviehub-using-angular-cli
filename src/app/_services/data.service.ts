import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
    tmdbEndpoint:string = "https://api.themoviedb.org/3";
    apiKey:string = "cd890f94a756b1518a2a17617a5b430e";

    constructor(private http: HttpClient) { }

    getAllMovies() {
        return this.http.get('/assets/data/movies.csv',{responseType: 'text'});
    }

    getAllMovieLinks(){
        return this.http.get('/assets/data/links.csv',{responseType: 'text'});
    }

    getMovieDetails(tmdbId) {
        let endpoint = this.tmdbEndpoint + '/movie/';
        return this.http.get(endpoint + tmdbId, {params: {api_key: this.apiKey}});
    }

}