import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {
  allMovies:any = []
  id:string = ''
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }



  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];

    this._MoviesService.getMoviesDetails(this.id).subscribe((response) => {
      this.allMovies = response;

      console.log(this.allMovies);

    })
  }

}
