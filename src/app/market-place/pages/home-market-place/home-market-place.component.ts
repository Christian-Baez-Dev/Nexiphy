import { Component, OnInit } from '@angular/core';
import { PostPreviewComponent } from "../../components/post-preview/post-preview.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";

@Component({
  selector: 'app-home-market-place',
  templateUrl: './home-market-place.component.html',
  styleUrls: ['./home-market-place.component.scss'],
  imports: [PostPreviewComponent, HomeHeaderComponent],
})
export default class HomeMarketPlaceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
