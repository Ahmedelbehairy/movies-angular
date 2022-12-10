import { MoviesService } from './../movies.service';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Typed from 'typed.js';
@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.scss']
})
export class BgComponent {
  movie: any;
  imgPrefix: string = `https://image.tmdb.org/t/p/w500`
  allMovies: any[] = []
  constructor( private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.movies('now_playing', 'movie').subscribe((response) => {
      this.allMovies = response.results;
    })

      const options = {
        strings: ['Innovation.', 'WELCOME TO MY MOVIE SHOW.'],
        typeSpeed: 200,
        backSpeed: 200,
        showCursor: true,
        cursorChar: '',
        loop: true
      };

      const typed = new Typed('.typed-element', options);
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


}
