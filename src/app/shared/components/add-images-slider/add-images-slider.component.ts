import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit, output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-add-images-slider',
  templateUrl: './add-images-slider.component.html',
  styleUrls: ['./add-images-slider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Permite que los estilos se apliquen globalmente

})
export class AddImagesSliderComponent  implements OnInit,AfterViewInit {
  imgUrls = input.required<string[] | ArrayBuffer[]>()

  @ViewChild('swiper', { static: false }) swiperRef: any; // Referencia al Swiper

  ngAfterViewInit() {
    const swiperInstance = this.swiperRef.swiperRef as Swiper; // Obtén la instancia de Swiper

    if (swiperInstance) {
      // Modificar directamente la configuración de la paginación

      // Modificar el estilo de los bullets después de inicializar Swiper
      swiperInstance.on('paginationUpdate', function () {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet: any) => {
          bullet.style.backgroundColor = 'red'; // Establece el color de fondo a rojo
          bullet.style.width = '12px'; // Ajusta el ancho
          bullet.style.height = '12px'; // Ajusta la altura
        });
      });

      // Re-inicializar Swiper para aplicar los cambios
      swiperInstance.update();
    }
  }


  delete =  output<number>()
  constructor() { }

  ngOnInit() {}

}
