import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ComponentsHomeServiceService } from '../../../services/components-home-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [RouterLink, RouterLinkActive, NgClass, NgStyle]
})
export class NavBarComponent  implements OnInit {
  router = inject(Router)
  positionLine = signal<number>(0)
  withLine = signal<number>(67)

  componentsHomeServiceService = inject(ComponentsHomeServiceService)

  goToMessages() {
    console.log('navigate')
    this.router.navigate(['messages'])
  }

  updateService(element: HTMLElement){
    this.positionLine.set(element.getBoundingClientRect().x - 20)
    this.withLine.set(element.getBoundingClientRect().width + 40)
  }
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
