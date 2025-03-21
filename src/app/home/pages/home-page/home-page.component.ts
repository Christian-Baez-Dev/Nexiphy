import { Component, inject, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { HomePageCardComponent } from "./home-page-card/home-page-card.component";
import { ComponentsHomeServiceService } from '../../../services/components-home-service.service';
import { CreatePostComponent } from "../../components/create-post/create-post.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [HomePageCardComponent, CreatePostComponent],
})
export default class HomePageComponent  implements OnInit {
  items = ['1','2','3','4','5','6','7']

  componentsHomeService = inject(ComponentsHomeServiceService)


  constructor() { }

  ngOnInit() {}

}
