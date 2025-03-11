import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [RouterLink, RouterLinkActive, NgClass]
})
export class NavBarComponent  implements OnInit {
  protected optionClass = 'option'
  protected options = [
    {
      path:'home-network',
      class: 'fa-sharp  fa-house ' + this.optionClass
    },
    {
      path:'add-new-post',
      class: 'fa-light fa-square-plus ' + this.optionClass
    },
    {
      path:'messages',
      class: 'fa-light fa-comment-dots ' + this.optionClass
    },
    {
      path:'home-marketplace',
      class: 'fa-light fa-cart-shopping ' + this.optionClass
    },
    {
      path:'notification',
      class: 'fa-light fa-bell ' + this.optionClass
    },
    {
      path:'pefil',
      class: 'fa-light fa-user ' + this.optionClass
    }
  ]
  constructor() { }

  ngOnInit() {}

}
