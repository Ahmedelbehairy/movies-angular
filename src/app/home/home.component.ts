import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allMovies:any[]=[]
  popularMovies:any[]=[]
  topRatedMovies:any[]=[]
  trendingMovies:any[]=[]
  upcomingMovies: any[] = []
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this._MoviesService.movies('now_playing','movie').subscribe((response)=>{
      this.allMovies =response.results.slice(0,10);
    })
    this._MoviesService.movies('popular', 'movie').subscribe((response)=>{
      this.popularMovies =response.results.slice(0,10);
    })
    this._MoviesService.movies('top_rated', 'movie').subscribe((response)=>{
      this.topRatedMovies =response.results.slice(0,10);
    })
    this._MoviesService.movies('/all/day', 'trending').subscribe((response)=>{
      this.trendingMovies =response.results.slice(0,10);
    })
    this._MoviesService.movies('upcoming', 'movie').subscribe((response)=>{
      this.upcomingMovies =response.results.slice(0,10);
    })
  }
}
