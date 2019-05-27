import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task/list-task.component';
import {CreationalRoutingModule} from './creational-routing.module';

@NgModule({
  declarations: [ListTaskComponent],
  imports: [
    CommonModule,
    CreationalRoutingModule
  ]
})
export class CreationalModule { }
