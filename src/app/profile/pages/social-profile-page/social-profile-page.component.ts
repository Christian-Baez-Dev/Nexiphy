import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { TruncateNumberPipe } from 'src/app/pipes/truncate-number.pipe';
import { PostCardComponent } from 'src/app/shared/components/post-card/post-card.component';

@Component({
  selector: 'app-social-profile-page',
  templateUrl: './social-profile-page.component.html',
  styleUrls: ['./social-profile-page.component.scss'],
  imports: [BannerComponent, TruncateNumberPipe, PostCardComponent]
})
export default class SocialProfilePageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
