import { NgClass } from '@angular/common';
import { Component, computed, input, linkedSignal, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-comment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.scss'],
  imports:[IonicModule, NgClass]
})
export class CommentComponent  implements OnInit {
  toggleExpanded() {
    if(this.isExpanded()){
      this.isExpanded.set(false)
      return
    }

    this.isExpanded.set(true)
  }

  isLiked = signal<boolean>(false)
  hasComent = input.required<boolean>()
  hasLike = signal<boolean>(false)

  isExpanded = signal<boolean>(false)
  constructor() { }

  ngOnInit() {}

}
