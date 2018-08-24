import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SysRoutingModule } from './sys-routing.module';
import { ChenComponent } from './chen/chen.component';
import {NgxEchartsModule} from "ngx-echarts";

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    SysRoutingModule,
    NgxEchartsModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    ChenComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class SysModule { }
