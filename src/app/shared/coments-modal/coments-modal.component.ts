import { Component, inject, input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommentComponent } from "./coment/coment.component";
import { PublishService } from 'src/app/services/publish.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './coments-modal.component.html',
  styleUrls: ['./coments-modal.component.scss'],
  imports: [IonicModule, CommentComponent]
})
export class CommentsModalComponent  implements OnInit {
  postId = input.required<string>()
  publishesService = inject(PublishService)

  commentResource = rxResource({
    request: () => ({postId:this.postId()}),
    loader:({request}) =>{
      return this.publishesService.getComentsPublish(request.postId)
    }
  })
  constructor() { }

  ngOnInit() {}


  createComment(input:HTMLTextAreaElement){
    const content = input.value

    this.publishesService.createComment({content:content,postId:this.postId()}).subscribe((response) =>{
      input.value = ''
      this.commentResource.reload()
    })
  }

}
