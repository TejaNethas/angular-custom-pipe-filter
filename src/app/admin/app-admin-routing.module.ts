import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelOneComponent } from '../admin/panel-one/panel-one.component';
import { PanelTwoComponent } from '../admin/panel-two/panel-two.component';


@NgModule({
  declarations: [
    PanelOneComponent,
    PanelTwoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AppAdminRoutingModule { }
