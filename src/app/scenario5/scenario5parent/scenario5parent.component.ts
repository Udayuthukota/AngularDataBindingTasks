import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5parent',
  templateUrl: './scenario5parent.component.html',
  styleUrls: ['./scenario5parent.component.css']
})
export class Scenario5parentComponent implements OnInit {

  message:String
  constructor() { }
  
  @Output() messagefromParent=new EventEmitter();

  ngOnInit() {
  }
 
recieve(value:string)
{
  this.message=value,
  this.save()
}
save()
{
  this.messagefromParent.emit(this.message)
}

}
