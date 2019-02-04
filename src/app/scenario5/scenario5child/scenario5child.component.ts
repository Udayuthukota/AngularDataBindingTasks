import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5child',
  templateUrl: './scenario5child.component.html',
  styleUrls: ['./scenario5child.component.css']
})
export class Scenario5childComponent implements OnInit {
value:string
  constructor() { }

@Output() messageFromChild=new EventEmitter()

  ngOnInit() {
  }

save()
{
this.messageFromChild.emit(this.value)
}
}
