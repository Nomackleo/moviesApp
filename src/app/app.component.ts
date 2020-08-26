import { Component } from '@angular/core';
import { PelisService } from './services/pelis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pelisApp';

  constructor( public ps:PelisService) {
    this.ps.getPopularity().subscribe( data => console.log(data) )
    
  } 


}
