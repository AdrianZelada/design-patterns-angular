import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFactoryComponent } from './abstract-factory.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormStoreComponent } from './form-store/form-store.component';
import {STORE_SERVICE, USER_SERVICE} from './abstract-factory';
import {AbstractFactoryRoutingModule} from './abstract-factory-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormService} from './form.service';

@NgModule({
  declarations: [AbstractFactoryComponent, ParentFormComponent, FormUserComponent, FormStoreComponent],
  imports: [
    CommonModule,
    AbstractFactoryRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: USER_SERVICE, useValue: 'USER_SERVICE'
    },
    {
      provide: STORE_SERVICE, useValue: 'STORE_SERVICE'
    },
    FormService
  ]
})
export class AbstractFactoryModule { }
