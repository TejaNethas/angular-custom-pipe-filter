import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ViewChildren  } from '@angular/core';
import { AjaxCallService } from '../ajax-call.service'
import { ChildComComponent } from '../child-com/child-com.component'
import {FormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit, AfterViewInit  {

constructor(public commonService: AjaxCallService, private cd: ChangeDetectorRef) { }

@ViewChild(ChildComComponent) chviewChild: ChildComComponent;

viewChildmessage:string;

ngAfterViewInit() {
  this.viewChildmessage = this.chviewChild.viewChildMsg;
  console.log(this.chviewChild);
}

smartData: any =[];
public searchText: any;
public customerData : any;

  ngOnInit(): void {
    this.commonService.commentsDataGetRequest().subscribe(res => {
      for (let i =0; i<this.smartData.length; i++){
        this.smartData.data[i].rowId = i;
      }
      this.smartData = res;
  
     
    })

    this.commonService.albumsDataGetRequest().subscribe(res => {
      console.log(res);
    })

    this.customerData = [
      {"name": 'Anil kumar', "Age": 34, "blog" :'https://code-view.com', "profileImgType": "png", "size": "2134532"},
      {"name": 'Sunil Kumar Singh', "Age": 28, "blog" :'https://code-sample.xyz', "profileImgType": "jpg", "size": "8134532"},
      {"name": 'Sushil Singh', "Age": 24, "blog" :'https://code-sample.com', "profileImgType": "svg", "size": "9134532"},
      {"name": 'Aradhya Singh', "Age": 5, "blog" :'https://code-sample.com', "profileImgType": "png", "size": "7134532"},
      {"name": 'Reena Singh', "Age": 28, "blog" :'https://code-sample.com', "profileImgType": "svg", "size": "5134532"},
      {"name": 'Alok Singh', "Age": 35, "blog" :'https://code-sample.com', "profileImgType": "jpg", "size": "4134532"},
      {"name": 'Dilip Singh', "Age": 34, "blog" :'https://code-sample.com', "profileImgType": "jpeg", "size": "6134532"}
    ];
  }
  

}

