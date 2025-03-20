import { Component, inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
})
export class BackComponent  implements OnInit {

  location  = inject(Location)
  back() {
    this.location.back()
  }

  constructor() { }

  ngOnInit() {}

}
