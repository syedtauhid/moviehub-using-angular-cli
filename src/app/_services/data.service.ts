import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
    apiEndpoint:string = "http://localhost:8080/api";
    apiKey:string = "cd890f94a756b1518a2a17617a5b430e";

    constructor(private http: HttpClient) { }

    getAllMovies() {
        let endpoint = this.apiEndpoint + "/movies";
        return this.http.get(endpoint);
    }

}