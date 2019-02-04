import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4parent',
  templateUrl: './scenario4parent.component.html',
  styleUrls: ['./scenario4parent.component.css']
})
export class Scenario4parentComponent implements OnInit {
 message:string

  constructor() { }



  ngOnInit() {

  }

  receive(val:string){
    this.message= val;
  }


}
