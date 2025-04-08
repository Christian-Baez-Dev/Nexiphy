import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date | string): string {
    const date = new Date(value);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (seconds < minute) {
      return `hace ${seconds} segundo${seconds !== 1 ? 's' : ''}`;
    } else if (seconds < hour) {
      const minutes = Math.floor(seconds / minute);
      return `hace ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
    } else if (seconds < day) {
      const hours = Math.floor(seconds / hour);
      return `hace ${hours} hora${hours !== 1 ? 's' : ''}`;
    } else if (seconds < week) {
      const days = Math.floor(seconds / day);
      return `hace ${days} día${days !== 1 ? 's' : ''}`;
    } else if (seconds < month) {
      const weeks = Math.floor(seconds / week);
      return `hace ${weeks} semana${weeks !== 1 ? 's' : ''}`;
    } else if (seconds < year) {
      const months = Math.floor(seconds / month);
      return `hace ${months} mes${months !== 1 ? 'es' : ''}`;
    } else {
      const years = Math.floor(seconds / year);
      return `hace ${years} año${years !== 1 ? 's' : ''}`;
    }
  }

}
