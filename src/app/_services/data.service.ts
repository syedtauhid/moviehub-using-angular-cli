import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    getAllMovies() {
        return this.http.get('/assets/data/movies.csv',{responseType: 'text'});
    }

    getAllMovieLinks(){
        return this.http.get('/assets/data/links.csv',{responseType: 'text'});
    }

}