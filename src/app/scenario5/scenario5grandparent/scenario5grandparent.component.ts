import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5grandparent',
  templateUrl: './scenario5grandparent.component.html',
  styleUrls: ['./scenario5grandparent.component.css']
})
export class Scenario5grandparentComponent implements OnInit {
  outputMessage:string

  constructor() { }

  ngOnInit() {
  }

  recieve1(value1:string)
  {
    this.outputMessage=value1;
  }

}
