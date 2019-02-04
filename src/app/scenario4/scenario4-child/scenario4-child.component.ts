import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {

  value :string
  @Output()
  fromChild = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  save(){
    this.fromChild.emit(this.value);
  }

}
