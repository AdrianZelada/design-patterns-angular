import { Component, OnInit } from '@angular/core';
import {FormService} from '../form.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})
export class ParentFormComponent implements OnInit {

  form: FormGroup;
  responseForm: any = {};
  constructor(private formService: FormService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  sendForm() {
    let data = this.form.getRawValue();
    data = this.formService.parseJson(data);
    this.formService.send(data).subscribe((response) => {
      this.responseForm = response;
    });
  }

}
