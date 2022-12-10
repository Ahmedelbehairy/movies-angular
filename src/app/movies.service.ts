import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private _HttpClient: HttpClient) { }
  movies(moviesType:string , moviesTypes:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${moviesTypes}/${moviesType}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
  }
  getMoviesDetails(id:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
  }
}

