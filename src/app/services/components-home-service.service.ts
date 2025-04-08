import { Injectable, signal } from '@angular/core';
import { modalType } from '../interfaces/modal.inteface';

@Injectable({
  providedIn: 'root'
})
export class ComponentsHomeServiceService {
  isCreateOpen = signal<boolean>(false)
  isMessageModalOpen = signal<boolean>(false)
  typeModalMessage = signal<modalType>('Success')
  messageModalMessage = signal<string>('Felicidades, el procedimiento se ha realizado correctamente')
  private jwt = ''
  constructor() { }
}
