import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FactoryMainComponent} from './factory-main/factory-main.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryRoutingModule{ }
