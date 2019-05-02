import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'height': '160px',
        transform: 'translateY(0)'
      })),
      state('highlighted', style({
        'height': '0px',
        transform: 'translateY(-200px)'
      })),
      transition('normal => highlighted', animate(600)),
      transition('highlighted => normal', animate(600))
    ])
  ]
})
export class NavBarComponent implements OnInit {
  state = 'highlighted';
  toggle = true;
  items = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    alert(`${e.target.innerText} Fired`);
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    console.log(this.state);
  }
}
