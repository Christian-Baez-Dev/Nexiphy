import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Announcement } from 'src/app/interfaces/announcement.interface';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
  imports:[RouterLink, CurrencyPipe]
})
export class PostPreviewComponent  implements OnInit {
  announcement = input.required<Announcement>()
  constructor() { }

  ngOnInit() {}


}
