import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsHomeServiceService {
  isCreateOpen = signal<boolean>(false)

  private jwt = ''
  constructor() { }
}
