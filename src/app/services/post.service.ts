import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environment.api_Url  + '/content'
  private httpClient = inject(HttpClient)
  constructor() { }


  createPost(data: FormData){
    return this.httpClient.post(this.url,data, {observe:'response',withCredentials:true})
  }
}
