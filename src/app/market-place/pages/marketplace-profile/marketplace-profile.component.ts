import { Component, inject, linkedSignal, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FollowService } from 'src/app/services/follow.service';
import { ProfileService } from 'src/app/services/profile.service';
import { PublishService } from 'src/app/services/publish.service';
import { BannerComponent } from "../../../shared/components/banner/banner.component";
import { FollowComponent } from "../../../shared/components/follow/follow.component";
import { TruncateNumberPipe } from "../../../pipes/truncate-number.pipe";

@Component({
  selector: 'app-marketplace-profile',
  templateUrl: './marketplace-profile.component.html',
  styleUrls: ['./marketplace-profile.component.scss'],
  imports: [BannerComponent, FollowComponent, TruncateNumberPipe],
})
export default class MarketplaceProfileComponent  implements OnInit {
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
  constructor() { }

  ngOnInit() {}

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
