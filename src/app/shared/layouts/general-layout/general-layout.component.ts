import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
import { CreatePostComponent } from "../../../home/components/create-post/create-post.component";
import { ComponentsHomeServiceService } from 'src/app/services/components-home-service.service';
import { MessageModalComponent } from "../../components/message-modal/message-modal.component";

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss'],
  imports: [NavBarComponent, RouterOutlet, CreatePostComponent, MessageModalComponent],
})
export default class GeneralLayoutComponent  implements OnInit {
  componentsHomeService = inject(ComponentsHomeServiceService)

  constructor() { }

  ngOnInit() {}


  onCloseCreate(event: boolean | null) {
    if(event !== null){
      this.componentsHomeService.isMessageModalOpen.set(true)

      if(event === true){
        this.componentsHomeService
        .typeModalMessage
        .set('Success')

        this.componentsHomeService
        .messageModalMessage
        .set('Se ha creado el post de manera exitosa')
      }else {
        this.componentsHomeService
        .typeModalMessage
        .set('Warning')

        this.componentsHomeService
        .messageModalMessage.
        set('Ha ocurrido un error, por favor, intentelo mas tarde')
      }
    }



    this.componentsHomeService.isCreateOpen.set(false)
  }


}
