import { AfterViewInit, Component, ElementRef, input, OnInit, signal, viewChild } from '@angular/core';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommentsComponent } from '../coments/comments.component';
import { NgClass, NgStyle } from '@angular/common';
import { ComponentsHomeServiceService } from 'src/app/services/components-home-service.service';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  imports: [CarouselComponent, TruncatePipe, CommentsComponent, IonicModule,NgClass],
})
export class PostCardComponent  implements OnInit {
  isLiked = signal<boolean>(false)
  heartContainer = viewChild<ElementRef>('heartContainer');

  datos = input.required<string>()
  isProfile =  input<boolean>(false)
  toggleText() {
    if(this.isExpanded()){
      this.isExpanded.set(false)
      return
    }

    this.isExpanded.set(true)

  }

  text = signal<string>('sit amet consectetur adipisicing elit. Ad minus doloremque fugit deserunt, hic esse odit id ullam quisquam animi sit amet consectetur adipisicing elit. Ad minus doloremque fugit deserunt, hic esse odit id ullam quisquam animi sit amet consectetur adipisicing elit. Ad minus doloremque fugit deserunt, hic esse odit id ullam quisquam animi quis tempora facilis consectetur eius expedita molestias cupiditate laudantium quae.')
  isExpanded = signal(false)


  toggleLike(){
    this.isLiked.set(!this.isLiked())


  }
  constructor() { }


  ngOnInit() {

  }



}
