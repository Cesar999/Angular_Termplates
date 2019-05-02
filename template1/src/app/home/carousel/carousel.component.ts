import { Component, OnInit } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/400?random&t=${Math.random()}`);

  constructor() { }

  @ViewChild('carousel') carousel: NgbCarousel;

  ngOnInit() {
    // this.carousel.pause();
  }

}
