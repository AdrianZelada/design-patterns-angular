import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-pro',
  templateUrl: './dynamic-pro.component.html',
  styleUrls: ['./dynamic-pro.component.scss']
})
export class DynamicProComponent implements OnInit {

  constructor(@Inject('dynamic') private service) { }

  ngOnInit() {
  }

  save() {
    this.service.save();
  }

}
