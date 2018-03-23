import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('/assets/data/movies.csv',{responseType: 'text'});
    }

    // localStorage.setItem('currentUser', JSON.stringify(user));
}