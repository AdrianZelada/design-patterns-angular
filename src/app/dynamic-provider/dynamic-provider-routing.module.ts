import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentMainComponent} from './content-main/content-main.component';

const routes: Routes = [
  {
    path: '',
    component: ContentMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicProviderRoutingModule { }
