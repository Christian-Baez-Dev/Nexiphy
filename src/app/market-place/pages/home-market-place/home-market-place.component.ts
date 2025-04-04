import { Component, OnInit, signal } from '@angular/core';
import { PostPreviewComponent } from "../../components/post-preview/post-preview.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { CategoriesModalComponent } from "../../../shared/components/categories-modal/categories-modal.component";
import { FilterComponent } from "../../../shared/components/filter/filter.component";

@Component({
  selector: 'app-home-market-place',
  templateUrl: './home-market-place.component.html',
  styleUrls: ['./home-market-place.component.scss'],
  imports: [PostPreviewComponent, HomeHeaderComponent, CategoriesModalComponent, FilterComponent],
})
export default class HomeMarketPlaceComponent  implements OnInit {
  categoriesIsOpen = signal<boolean>(false)
  filterIsOpen = signal<boolean>(false)

  constructor() { }

  ngOnInit() {}

}
