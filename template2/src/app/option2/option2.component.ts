import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option2',
  templateUrl: './option2.component.html',
  styleUrls: ['./option2.component.css']
})
export class Option2Component implements OnInit {
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
          fontSize: 12,
          fontColor: '#666'
      }
  }
  };
  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'radar';
  barChartLegend = true;
  barChartData = [
    { data: [92, 65, 23, 89, 10, 46],
      label: 'Series A',
      backgroundColor: '#5D9CECB1',
      borderColor: '#5D9CEC',
      borderWidth: 4},
    { data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#ED5565B1',
      borderColor: '#ED5565',
      borderWidth: 4},
    { data: [65, 83, 12, 43, 92, 10],
      label: 'Series C',
      backgroundColor: '#FFDA7CB1',
      borderColor: '#FFDA7C',
      borderWidth: 4},
    { data: [22, 78, 52, 31, 28, 30],
      label: 'Series D',
      backgroundColor: '#A0D468B1',
      borderColor: '#A0D468',
      borderWidth: 4}
  ];


  bars = [
    {color: '#5D9CEC', width: 55, name: 'Somedata1'},
    {color: '#ED5565', width: 15, name: 'Somedata2'},
    {color: '#FFDA7C', width: 75, name: 'Somedata3'},
    {color: '#A0D468', width: 90, name: 'Somedata4'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
