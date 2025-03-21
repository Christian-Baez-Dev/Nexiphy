import { Component, effect, ElementRef, OnInit, output, signal, viewChild } from '@angular/core';
import { reduce } from 'rxjs';
import { AddImagesSliderComponent } from "../../../shared/components/add-images-slider/add-images-slider.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  imports: [AddImagesSliderComponent],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({ width: '0', height: '0' }), // Inicializa con 0 en ambos
        animate('1s 0s ease-out', style({ width: '95vw', height: 'auto' })) // Expande a 95vw y auto
      ])
    ])
  ]
})
export class CreatePostComponent  implements OnInit {
  close = output<void>()

  inputFile = viewChild<ElementRef>('inputFile')

  imgUrls = signal<string[]>([]);

  pruebaEffect = effect(() =>{
    console.log(this.imgUrls())
  })
  constructor() { }

  ngOnInit() {}

  triggerFileInput() {
    this.inputFile()?.nativeElement.click()
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;

    if (files.length > 0) {
      // Convertimos FileList a un arreglo y usamos map() para procesar los archivos
      Array.from(files).map(file => {
        const reader = new FileReader();

        reader.onload = () => {
          console.log(reader.result)
          this.imgUrls.update((list) => [...list,reader.result as string]);
        };

        reader.onerror = (error) => {
          console.error('Error al leer el archivo:', error);
        };

        reader.readAsDataURL(file); // Leemos el archivo como URL
      });
    }
  }

}
