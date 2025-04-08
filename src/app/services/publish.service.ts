import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publish } from '../interfaces/publish.interface';

@Injectable({
  providedIn: 'root'
})
export class PublishService {
  private apiUrl = environment.api_Url + '/content'
  private httpClient = inject(HttpClient)

  constructor() { }



  getPublishes(): Observable<Publish[]>{
    return this.httpClient
    .get<Publish[]>(this.apiUrl + '/others', {withCredentials:true})
  }
}
