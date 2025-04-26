import { Component, effect, ElementRef, inject, OnInit, output, signal, viewChild } from '@angular/core';
import { reduce } from 'rxjs';
import { AddImagesSliderComponent } from "../../../shared/components/add-images-slider/add-images-slider.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { PostService } from 'src/app/services/post.service';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  imports: [AddImagesSliderComponent, ReactiveFormsModule]
})
export class CreatePostComponent  implements OnInit {
  private postService = inject(PostService)
  protected content = signal<string>('')
  protected authservice = inject(AuthService)

  close = output<boolean | null>()

  inputFile = viewChild<ElementRef>('inputFile')

  imgUrls = signal<string[]>([]);

  protected imgFiles = signal<File[]>([])



  constructor() { }

  ngOnInit() {}

  onClick() {
    const data = new FormData()
    data.append('content',this.content())
    this.imgFiles().forEach(file =>{
      data.append('images',file)
    })

    this.postService.createPost(data).subscribe({
      next: (resp) => {
        console.log('Respuesta exitosa:', resp);
        this.close.emit(true)
      },
      error: (err) => {
        console.error('Error del backend:', err);
        this.close.emit(false)

      }
    });
  }

  triggerFileInput() {
    this.inputFile()?.nativeElement.click()
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;

    if (files.length > 0) {
      // Convertimos FileList a un arreglo y usamos map() para procesar los archivos
      Array.from(files).map(file => {
        this.imgFiles.update((list) =>[
          ...list,
          file
        ])

        const reader = new FileReader();

        reader.onload = () => {
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
