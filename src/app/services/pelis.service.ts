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

  
  getCurrent() {
    let from = new Date().toISOString().slice(0, 10)
    let until = new Date().toISOString().slice(0, 10)
    
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ from }&primary_release_date.lte=${ until }&api_key=${ this.apiKey }&callback=test`
    return this.http.jsonp( url, 'callback' ).pipe(map( res => res['results'] )) 
  }             
  getPopularity() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&callback=test`
    return this.http.jsonp( url, 'callback' ).pipe(map( res => res['results'] ))
  }
  getPopKids() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&callback=test`
    return this.http.jsonp( url, 'callback' ).pipe(map( res => res['results'] ))
  }
}
