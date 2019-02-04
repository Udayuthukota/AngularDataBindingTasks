import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6-siblling1',
  templateUrl: './scenario6-siblling1.component.html',
  styleUrls: ['./scenario6-siblling1.component.css']
})
export class Scenario6Siblling1Component implements OnInit {

  value:string;
  @Output() fromSibling1 = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  save(){
    this.fromSibling1.emit(this.value);
  }
}
