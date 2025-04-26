import { Pipe, PipeTransform } from '@angular/core';
import { AnnouncementStatus } from '../interfaces/announcement.enum';
import { StatusColor } from '../interfaces/announcement.interface';

@Pipe({
  name: 'statusColor',
  standalone: true
})
export class StatusColorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return StatusColor[value as AnnouncementStatus];
  }

}
