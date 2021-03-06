import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option3',
  templateUrl: './option3.component.html',
  styleUrls: ['./option3.component.css']
})
export class Option3Component implements OnInit {
  chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
