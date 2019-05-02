import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mycustombar',
  templateUrl: './mycustombar.component.html',
  styleUrls: ['./mycustombar.component.css']
})
export class MycustombarComponent implements OnInit {
  @Input() color: string;
  @Input() width: number;
  @ViewChild('bar', {read: ElementRef}) tref: ElementRef;

  constructor() { }

  ngOnInit() {
    this.tref.nativeElement.style.backgroundColor = this.color;
    this.tref.nativeElement.style.width = `${this.width}%`;
  }

}
