import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option1',
  templateUrl: './option1.component.html',
  styleUrls: ['./option1.component.css']
})
export class Option1Component implements OnInit {
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
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: '#AC92ECB1',
      borderColor: '#AC92EC',
      hoverBackgroundColor: '#AC92EC',
      hoverBorderColor: '#AC92ECB1',
      borderWidth: 4},
    { data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: '#48CFADB1',
      borderColor: '#48CFAD',
      hoverBackgroundColor: '#48CFAD',
      hoverBorderColor: '#48CFADB1',
      borderWidth: 4}
  ];

  // --------------------------------


  pieChartType = 'pie';
  pieOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
          fontSize: 12,
          fontColor: '#666'
      }
    },
    elements: {
      arc: {
          borderWidth: 0
      }
    },
    cutoutPercentage: 80,
    tooltips: {
      enabled: true
  }
};

pie1ChartData = [
  {
    label: 'Lanes',
    data: [6, 4],
    backgroundColor: ['#D62739', '#ED5565'],
    hoverBackgroundColor: ['#48CFADB1', '#AC92ECB1']
  }
];
pie1labels = ['Good', 'Bad'];


pie2ChartData = [
  {
    label: 'Lanes',
    data: [2, 8],
    backgroundColor: ['#F6A742', '#FFDA7C'],
    hoverBackgroundColor: ['#48CFADB1', '#AC92ECB1']
  }
];
pie2labels = ['Right', 'Wrong'];


pie3ChartData = [
  {
    label: 'Lanes',
    data: [7, 3],
    backgroundColor: ['#6EAF26', '#A0D468'],
    hoverBackgroundColor: ['#48CFADB1', '#AC92ECB1']
  }
];
pie3labels = ['Up', 'Down'];


pie1 = this.pie1ChartData[0].data[0] * 100 / (this.pie1ChartData[0].data[0] + this.pie1ChartData[0].data[1]);
pie2 = this.pie2ChartData[0].data[0] * 100 / (this.pie2ChartData[0].data[0] + this.pie2ChartData[0].data[1]);
pie3 = this.pie3ChartData[0].data[0] * 100 / (this.pie3ChartData[0].data[0] + this.pie3ChartData[0].data[1]);

  constructor() { }

  ngOnInit() { }

}
