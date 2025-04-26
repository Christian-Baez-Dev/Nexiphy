import { NgClass } from '@angular/common';
import { Component, computed, inject, input, linkedSignal, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommentApp } from 'src/app/interfaces/publish.interface';
import { TimeAgoPipe } from 'src/app/pipes/time-ago.pipe';
import { PublishService } from 'src/app/services/publish.service';

@Component({
  selector: 'app-comment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.scss'],
  imports:[IonicModule, NgClass, TimeAgoPipe]
})
export class CommentComponent  implements OnInit {
  publishService = inject(PublishService)

  isLiked = signal<boolean>(false)
  hasLike = signal<boolean>(false)
  comment = input.required<CommentApp>()
  replies = signal<CommentApp[]>([])
  isExpanded = signal<boolean>(false)
  isInputOpen = signal<boolean>(false)


  constructor() { }

  ngOnInit() {
  }

  toggleExpanded() {
    if(!this.isExpanded() && this.replies().length === 0){
      this.publishService.getRepliesComment(this.comment().id).subscribe((response) =>{
        this.replies.set(response.data)
      })
    }
    this.isExpanded.set(!this.isExpanded())
  }


  createCommentChilldren(content:string){
    this.publishService.createComment({content:content, parentCommentId:this.comment().id}).subscribe((response) =>{
      this.isInputOpen.set(false)
      this.publishService.getRepliesComment(this.comment().id).subscribe((response) =>{
        this.replies.set(response.data)
      })
    })
  }

}
