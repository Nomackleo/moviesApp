import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAverage]'
})
export class AverageDirective {

  constructor( private er:ElementRef ) { }

}
