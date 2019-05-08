import { Component, OnInit } from '@angular/core';
import {FactoryMain, FactoryService, SERVICE_COMPONENT_1} from '../../factory/factory.service';
import {AbstractFactoryMain, STORE_SERVICE} from '../abstract-factory';
import {FormService} from '../form.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl} from '@angular/forms';
import {ParentFormComponent} from '../parent-form/parent-form.component';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.scss'],
  providers: [
    {
      provide: FormService,
      useFactory: AbstractFactoryMain,
      deps: [STORE_SERVICE, HttpClient]
    }
  ]
})
export class FormStoreComponent extends ParentFormComponent implements OnInit{

  constructor(formService: FormService, fb: FormBuilder) {
    super(formService, fb);
    this.form = fb.group({
      nameStore: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
    });
  }
}
