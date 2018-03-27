import { Injectable } from '@angular/core';



@Injectable()
export class MovieVisitStorageService {
    KeyStorage: string = "recent-movie-view";
    dataArr: any = [];

    getAllRecentMovieData() {
        let data = localStorage.getItem(this.KeyStorage);
        let dataArr = data ? JSON.parse(data) : [];
        for(let i = 0; i < dataArr.length; i++) {
            let itemAsJson = JSON.parse(dataArr[i]);
            dataArr[i] = itemAsJson;
        }
        return dataArr;
    }

    addMovieToRecentyVisited(movie) {
         let data = localStorage.getItem(this.KeyStorage);
        if(data)
            this.dataArr = JSON.parse(data);

        if(!this.notInDataArray(movie.id))
            return;

        this.dataArr.unshift(JSON.stringify(movie));
        if(this.dataArr.length > 3) this.dataArr.pop();

        localStorage.setItem(this.KeyStorage, JSON.stringify(this.dataArr));
    }

    notInDataArray(val) {
        for(let i = 0; i < this.dataArr.length; i++) {
            let itemAsJson = JSON.parse(this.dataArr[i]);
            if(itemAsJson.id == val)
                return false;
        }
        return true;
    }

}