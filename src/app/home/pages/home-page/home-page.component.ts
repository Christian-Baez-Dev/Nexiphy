import { Component, inject, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { ComponentsHomeServiceService } from '../../../services/components-home-service.service';
import { CreatePostComponent } from "../../components/create-post/create-post.component";
import { NgClass } from '@angular/common';
import { PostCardComponent } from 'src/app/shared/components/post-card/post-card.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [ PostCardComponent],
})
export default class HomePageComponent  implements OnInit {
  items = ['1','2','3','4','5','6','7']



  constructor() { }

  ngOnInit() {}

}
