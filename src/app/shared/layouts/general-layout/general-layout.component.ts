import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
import { CreatePostComponent } from "../../../home/components/create-post/create-post.component";
import { ComponentsHomeServiceService } from 'src/app/services/components-home-service.service';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss'],
  imports: [NavBarComponent, RouterOutlet, CreatePostComponent],
})
export default class GeneralLayoutComponent  implements OnInit {
  componentsHomeService = inject(ComponentsHomeServiceService)

  constructor() { }

  ngOnInit() {}

}
