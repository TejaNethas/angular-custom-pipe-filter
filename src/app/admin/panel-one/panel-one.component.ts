import { Component, OnInit } from '@angular/core';
import { AjaxCallService } from '../../ajax-call.service'

@Component({
  selector: 'app-panel-one',
  templateUrl: './panel-one.component.html',
  styleUrls: ['./panel-one.component.css']
})
export class PanelOneComponent implements OnInit {

  constructor(public commonService: AjaxCallService) { }

  ngOnInit(): void {
    this.commonService.userDataGetRequest().subscribe(res => {
      console.log(res);
    })

    this.commonService.empDataGetRequest().subscribe(res => {
      console.log(res);
    })
    
    this.commonService.commentsDataGetRequest().subscribe(res => {
      console.log(res);
    })
    
    this.commonService.albumsDataGetRequest().subscribe(res => {
      console.log(res);
    })

  }

}
