import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicTruncate'
})
export class DynamicTruncatePipe implements PipeTransform {
  transform(value: string, containerWidth: number, charPerPixel: number = 0.13): string {
    if (!value) return '';
    console.log({value},{containerWidth},{charPerPixel})
    const maxLength = Math.floor(containerWidth * charPerPixel); // Calcula el límite de caracteres
    return value.length > maxLength ? value.substring(0, maxLength) + '...' : value;
  }
}
