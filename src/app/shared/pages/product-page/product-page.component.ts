import { Component, inject, OnInit, signal } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { BackComponent } from "../../components/back/back.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Announcement } from 'src/app/interfaces/announcement.interface';
import { TimeAgoPipe } from 'src/app/pipes/time-ago.pipe';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { YearPipe } from 'src/app/pipes/year.pipe';
import { StatusColorPipe } from 'src/app/pipes/status-color.pipe';
import { StatusPipe } from 'src/app/pipes/status.pipe';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  imports: [CarouselComponent, BackComponent, TimeAgoPipe, TitleCasePipe, YearPipe, StatusColorPipe, StatusPipe,CurrencyPipe,RouterLink],
})
export default class ProductPageComponent  implements OnInit {
  imgsPruebas  = ['https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp','https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp','https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp']
  activatedRoute = inject(ActivatedRoute)
  param = this.activatedRoute.snapshot.params['code'] ?? ''
  announcement = signal<Announcement | null>(null)
  announcementService = inject(AnnouncementService)
  constructor() { }

  ngOnInit() {
    if(this.param){
      this.announcementService.getOne(this.param).subscribe((response) => {
        this.announcement.set(response)
        console.log(this.announcement()?.marketUser)
      })
    }
  }

}
function type(created_at: Date | undefined): any {
  throw new Error('Function not implemented.');
}

