import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { AjaxCallService } from '../ajax-call.service'

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent implements OnInit {
  selectedResponse:any;

  anotherEmitMsg:string ="emited message from child";
  viewChildMsg:string = "view chils data passing from local child component to parent component(about component)";

 @Input() myName:string;
 @Output() getValues: EventEmitter<any> = new EventEmitter<any>();
 @Output() anotherEmit = new EventEmitter<string>();

 todolistFun() {
  this.commonService.todosDataGetReq().subscribe(res => {
    console.log("todosDataGetReq",res);
    this.selectedResponse = res;
    this.getValues.emit( this.selectedResponse);
    
  })
}

emitAnother(){
  this.anotherEmit.emit(this.anotherEmitMsg);
}
  constructor(public commonService: AjaxCallService) { }

  ngOnInit(): void {
  }


}
