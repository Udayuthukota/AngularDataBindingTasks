import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6-siblling2',
  templateUrl: './scenario6-siblling2.component.html',
  styleUrls: ['./scenario6-siblling2.component.css']
})
export class Scenario6Siblling2Component implements OnInit {

  @Input() input:string;
  constructor() { }

  ngOnInit() {
  }

}
