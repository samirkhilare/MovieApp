import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieItemService {

  constructor(private http:HttpClient) { }

  url:any='http://localhost:3000/movieList';

  addMovie(movieList:any){
    return this.http.post(this.url,movieList)
  }

  getMovie(){
    return this.http.get(this.url)
  }
}
