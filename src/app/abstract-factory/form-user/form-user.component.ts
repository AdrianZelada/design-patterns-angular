import { Component, OnInit } from '@angular/core';
import {FormService} from '../form.service';
import {AbstractFactoryMain, USER_SERVICE} from '../abstract-factory';
import {HttpClient} from '@angular/common/http';
import {ParentFormComponent} from '../parent-form/parent-form.component';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  providers: [
    {
      provide: FormService,
      useFactory: AbstractFactoryMain,
      deps: [USER_SERVICE, HttpClient]
    }
  ]
})
export class FormUserComponent extends ParentFormComponent {

  constructor(public formService: FormService, public fb: FormBuilder) {
    super(formService, fb);
    this.form = fb.group({
      name: new FormControl(''),
      lastName: new FormControl('')
    });
  }
}
