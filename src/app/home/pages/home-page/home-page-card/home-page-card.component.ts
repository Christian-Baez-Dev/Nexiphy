import { Component, input, OnInit, signal } from '@angular/core';
import { CarouselComponent } from "../../../../shared/components/carousel/carousel.component";
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { HomePageCardComentsComponent } from "./home-page-card-coments/home-page-card-coments.component";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'home-page-card',
  templateUrl: './home-page-card.component.html',
  styleUrls: ['./home-page-card.component.scss'],
  imports: [CarouselComponent, TruncatePipe, HomePageCardComentsComponent, HomePageCardComentsComponent, IonicModule],
})
export class HomePageCardComponent  implements OnInit {

  datos = input.required<string>()

  toggleText() {
    if(this.isExpanded()){
      this.isExpanded.set(false)
      console.log(this.isExpanded())
      return
    }

    this.isExpanded.set(true)
    console.log(this.isExpanded())

  }

  text = signal<string>('sit amet consectetur adipisicing elit. Ad minus doloremque fugit deserunt, hic esse odit id ullam quisquam animi sit amet consectetur adipisicing elit. Ad minus doloremque fugit deserunt, hic esse odit id ullam quisquam animi sit amet consectetur adipisicing elit. Ad minus doloremque fugit deserunt, hic esse odit id ullam quisquam animi quis tempora facilis consectetur eius expedita molestias cupiditate laudantium quae.')
  isExpanded = signal(false)
  constructor() { }

  ngOnInit() {}

}
