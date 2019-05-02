import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option4',
  templateUrl: './option4.component.html',
  styleUrls: ['./option4.component.css']
})
export class Option4Component implements OnInit {

  data = [
    { month: 'January', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'February', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'March', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'April', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'May', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'June', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'July', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'August', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'September', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'October', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'November', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
    { month: 'December', profits: this.rdp(), quantity: this.rdq(),
    customers: this.rdc(), sales: this.rds(), expenses: this.rde()},
  ];

  keys = this.getKeys();
  map = this.createFlags();

  map2 = this.createMonths();
  flag = true;

  constructor() { }

  ngOnInit() {
  }

  rdp() {
    return Math.round(Math.random() * 100000);
  }
  rde() {
    return Math.round(Math.random() * 10000);
  }
  rdq() {
    return Math.round(Math.random() * 1000);
  }
  rds() {
    return Math.round(Math.random() * 100);
  }
  rdc() {
    return Math.round(Math.random() * 10);
  }

  getKeys() {
    const keys = Object.keys(this.data[0]);
    const temp = [];
    for (const k of keys) {
      if (k !== 'month') {
        temp.push(k);
      }
    }
    return temp;
  }

  createMonths() {
    const map = new Map();
      map.set('January', 1);
      map.set('February', 2);
      map.set('March', 3);
      map.set('April', 4);
      map.set('May', 5);
      map.set('June', 6);
      map.set('July', 7);
      map.set('August', 8);
      map.set('September', 9);
      map.set('October', 10);
      map.set('November', 11);
      map.set('December', 12);
      return map;
  }

  createFlags() {
    const map = new Map();
    for (const k of this.keys) {
      map.set(k, false);
    }
    return map;
  }

  sort(event) {
    const prop = event.target.innerText.toLowerCase();
    console.log(prop);
    let temp;
    if (this.map.get(prop)) {
      temp = this.data.sort((a, b) => {
        if ( a[prop] > b[prop]) {
          return 1;
        } else if ( a[prop] < b[prop] ) {
          return -1;
        } else {
          return 0;
        }
      });
      this.map.set(prop, false);
    } else {
      temp = this.data.sort((a, b) => {
        if ( a[prop] > b[prop]) {
          return -1;
        } else if ( a[prop] < b[prop] ) {
          return 1;
        } else {
          return 0;
        }
      });
      this.map.set(prop, true);
    }

    this.data = temp;
  }

  sortMonths() {
    let temp;
    if (this.flag) {
      temp = this.data.sort((a, b) => {
        if ( this.map2.get(a.month) > this.map2.get(b.month)) {
          return 1;
        } else if ( this.map2.get(a.month) < this.map2.get(b.month) ) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      temp = this.data.sort((a, b) => {
        if ( this.map2.get(a.month) > this.map2.get(b.month)) {
          return -1;
        } else if ( this.map2.get(a.month) < this.map2.get(b.month) ) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    this.flag = !this.flag;
    this.data = temp;
  }

}
