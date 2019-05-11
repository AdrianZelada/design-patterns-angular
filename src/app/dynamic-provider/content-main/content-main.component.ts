import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.scss']
})
export class ContentMainComponent implements OnInit {

  items: Array<string> = ['one', 'two', 'one', 'two'];
  constructor() { }

  ngOnInit() {
  }

}
