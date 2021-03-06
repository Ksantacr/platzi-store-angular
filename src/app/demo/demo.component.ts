import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  power = 10;
  names = ["tamara", "mayiya", "robin", "kevin"];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.names.push('nuevo item');
  }

  deleteItem(index: number) {
    this.names.splice(index, 1);
  }

}
