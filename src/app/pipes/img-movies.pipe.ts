import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgMovies'
})
export class ImgMoviesPipe implements PipeTransform {

  transform(movie: any ): any {

    let url = "https://image.tmdb.org/t/p/w500"
    
    if ( movie.poster_path ) {
      return url + movie.poster_path
    }  else {
      if ( movie.backdrop_path ) {
        return url + movie.backdrop_path
      } else {
        return "assets/img/blue_square_2.svg"
      }
    }
  }

}
