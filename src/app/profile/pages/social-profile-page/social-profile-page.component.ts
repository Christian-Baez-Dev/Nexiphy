import { Component, computed, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { TruncateNumberPipe } from 'src/app/pipes/truncate-number.pipe';
import { PostCardComponent } from 'src/app/shared/components/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { JsonPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublishService } from 'src/app/services/publish.service';
import { FollowComponent } from "../../../shared/components/follow/follow.component";
import { FollowService } from 'src/app/services/follow.service';
import { UserProfile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-social-profile-page',
  templateUrl: './social-profile-page.component.html',
  styleUrls: ['./social-profile-page.component.scss'],
  imports: [BannerComponent, TruncateNumberPipe, PostCardComponent, IonicModule, FollowComponent]
})
export default class SocialProfilePageComponent  implements OnInit {

  activatedRoute = inject(ActivatedRoute)
  userName = this.activatedRoute.snapshot.params['userName'] ?? null
  profileService = inject(ProfileService)
  publishService = inject(PublishService)
  followService = inject(FollowService)
  followers =  linkedSignal<number>(() =>{
      if(this.profileResource.hasValue())
        return this.profileResource.value().stats.followers

      return 0
  })


  profileResource = rxResource({
    request:() => ({param: this.userName}),
    loader: ({request}) =>{
      if(!request.param) return of()

        return this.profileService.getProfile(request.param)
    }
  })

  publishesResource =  rxResource({
    request:() => ({param: this.userName}),
    loader: ({request}) =>{
      if(!request.param) return of()

        return this.publishService.getPublishUser(request.param)
    }
  })


  constructor() { }

  ngOnInit() {

  }

  onClickFollow(userId: string, isFollowing: boolean) {
    console.log(isFollowing)
      if(isFollowing === true){
        this.followService.followSomeone(userId)
        this.followers.set(this.followers()+1)
      }else{
        this.followService.unfollowSomeone(userId)
        this.followers.set(this.followers()-1)
      }
    }

}
