import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PelisService {

  private apiKey:string = "6b887e2c608d46c2fd3d820ece7fe4b7"
  private urlMoviedb:string = "https://api.themoviedb.org/3"
  constructor( private jsp:HttpClientJsonpModule,
               private http:HttpClient ) { }

  
  getFavorites() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&callback=test`
    return this.http.jsonp( url, 'callback' ).pipe(map( res => res ))
  }
}
