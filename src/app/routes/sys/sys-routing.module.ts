import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChenComponent} from "./chen/chen.component";

const routes: Routes = [
  { path: 'chen', component: ChenComponent, data: { title: '陈', titleI18n: 'chen' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule { }
