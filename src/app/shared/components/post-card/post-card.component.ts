import { AfterViewInit, Component, effect, ElementRef, input, OnInit, signal, viewChild } from '@angular/core';
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

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  imports: [CarouselComponent, TruncatePipe, CommentsComponent, IonicModule,NgClass, TimeAgoPipe, TruncateNumberPipe, RouterLink],
})
export class PostCardComponent  implements OnInit {
  isLiked = signal<boolean>(false)

  datos = input.required<Publish>()


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
    this.isLiked.set(!this.isLiked())


  }
  constructor() { }


  ngOnInit() {
  }


}
