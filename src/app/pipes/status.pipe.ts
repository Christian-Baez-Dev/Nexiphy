import { Pipe, PipeTransform } from '@angular/core';
import { AnnouncementStatus } from '../interfaces/announcement.enum';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if(value === AnnouncementStatus.NEW){
      return 'Nuevo'
    }

    if(value === AnnouncementStatus.USED){
      return 'Usado'
    }

    if(value === AnnouncementStatus.LOW_USED){
      return 'Poco Usado'
    }

    if(value === AnnouncementStatus.OPEN_BOX){
      return 'Caja Abierta'
    }
    return value;
  }

}
