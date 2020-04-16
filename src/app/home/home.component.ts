import { Component, OnInit } from '@angular/core';
import { AjaxCallService } from '../ajax-call.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  todoData: any =[];
  childMessage:string;
  localMessage: string = 'Teja Nethas';
  userDataReq : any =[];
  currentName:string;
  todoList(todoDataRes: any) {
    this.todoData = todoDataRes;
    console.log("this.todoData", this.todoData);
  }

  parentToChild($event){
    this.childMessage = $event
    console.log("this.childMessage", this.childMessage);
  }

  constructor(public commonService: AjaxCallService) { }

  ngOnInit(): void {


    this.commonService.userDataGetRequest().subscribe(res => {
      console.log("userDataGetRequest",res);
      this.userDataReq = res;
      this.currentName = this.userDataReq[0].name
      window.sessionStorage.setItem('user name', this.currentName);
    })

    // let storageValue = JSON.stringify(this.currentName);



    this.commonService.empDataGetRequest().subscribe(res => {
      console.log("empDataGetRequest",res);
    })

  }




}
