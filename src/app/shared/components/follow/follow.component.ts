import { NgClass } from '@angular/common';
import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { FollowService } from 'src/app/services/follow.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss'],
  imports: [NgClass]
})
export class FollowComponent  implements OnInit {

  isFollowing = input.required<boolean>()
  isFollowingSignal = signal<boolean>(false)
  clickFollow = output<boolean>()
  constructor() { }

  ngOnInit() {
    this.isFollowingSignal.set(this.isFollowing())
  }


  onClick() {
    this.isFollowingSignal.set(!this.isFollowingSignal())
    this.clickFollow.emit(this.isFollowingSignal())
  }

}
