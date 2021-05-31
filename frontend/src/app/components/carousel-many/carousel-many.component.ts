import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-many',
  templateUrl: './carousel-many.component.html',
  styleUrls: ['./carousel-many.component.css']
})
export class CarouselManyComponent implements OnInit {
  @Input() dataReceived: any = [];
  @Input() isMobile: any = false;
  @Input() cata: string = "";
  @Input() dataReceived_arr: any = [];
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
}
