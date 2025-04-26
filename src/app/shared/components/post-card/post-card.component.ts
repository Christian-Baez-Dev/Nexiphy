import { AfterViewInit, Component, effect, ElementRef, inject, input, OnInit, signal, viewChild } from '@angular/core';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommentsComponent } from '../coments/comments.component';
import { NgClass, NgStyle } from '@angular/common';
import { ComponentsHomeServiceService } from 'src/app/services/components-home-service.service';
import { Publish } from 'src/app/interfaces/publish.interface';
import { TimeAgoPipe } from 'src/app/pipes/time-ago.pipe';
import { TruncateNumberPipe } from 'src/app/pipes/truncate-number.pipe';
import { RouterLink } from '@angular/router';
import { PublishService } from 'src/app/services/publish.service';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  imports: [CarouselComponent, TruncatePipe, CommentsComponent, IonicModule,NgClass, TimeAgoPipe, TruncateNumberPipe, RouterLink],
})
export class PostCardComponent  implements OnInit {
  followServices = inject(FollowService)
  datos = input.required<Publish>()
  isLiked = signal<boolean>(false)

  publishService = inject(PublishService)

  isProfile =  input<boolean>(false)
  toggleText() {
    if(this.isExpanded()){
      this.isExpanded.set(false)
      return
    }

    this.isExpanded.set(true)

  }

  isExpanded = signal(false)


  toggleLike(){
    this.publishService.toggleLike(this.datos().id).subscribe((response) =>{
      this.isLiked.set(!this.isLiked())
      console.log(response)
    })

  }
  constructor() { }


  ngOnInit() {
    console.log(this.datos())
    this.isLiked.set(this.datos().hasLiked)
  }


}
