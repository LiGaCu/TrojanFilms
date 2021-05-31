import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrls: ['./carousel-main.component.css']
})
export class CarouselMainComponent{
  @Input() dataReceived: any = [];
  @Input() isMobile: any = [];
}