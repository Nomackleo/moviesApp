import { Component, OnInit } from '@angular/core';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentMovies: any[] = []
  popularityMovies: any[] = []

  constructor( private ps:PelisService ) {
    
    this.ps.getCurrent().subscribe( (data:any) => {
      this.currentMovies = data
      console.log(this.currentMovies);
    } )
    /* this.ps.getPopularity().subscribe( (data:any) => {
      this.popularityMovies = data
    } ) */
   }

  ngOnInit(): void {
  }

}
