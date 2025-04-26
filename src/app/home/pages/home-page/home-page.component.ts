import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { ComponentsHomeServiceService } from '../../../services/components-home-service.service';
import { CreatePostComponent } from "../../components/create-post/create-post.component";
import { NgClass } from '@angular/common';
import { PostCardComponent } from 'src/app/shared/components/post-card/post-card.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { PublishService } from 'src/app/services/publish.service';
import { TruncateNumberPipe } from 'src/app/pipes/truncate-number.pipe';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserDto } from 'src/app/interfaces/user.interface';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [ PostCardComponent,IonicModule],
})
export default class HomePageComponent  implements OnInit {
  items = ['1','2','3','4','5','6','7']
  private publishService = inject(PublishService)
  componentsHomeServiceService = inject(ComponentsHomeServiceService)
  authService = inject(AuthService)
  router = inject(Router)
  user = signal(this.authService.user())

  publishResource = rxResource({
    loader:() =>{
      return this.publishService.getPublishes()
    }
  })


  constructor() { }

  ngOnInit() {
  }


  goToMessages() {
    this.router.navigate(['messages'])
  }
}


