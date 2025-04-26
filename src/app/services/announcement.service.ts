import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from '../interfaces/generic.interface';
import { Announcement } from '../interfaces/announcement.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  apiUrl = environment.api_Url + '/announcements'
  httpClient = inject(HttpClient)
  constructor() { }

  getAll(): Observable<PaginationResponse<Announcement[]>>{
    return this.httpClient.get<PaginationResponse<Announcement[]>>(this.apiUrl,{withCredentials:true})
  }

  create(data: FormData){
    this.httpClient.post(this.apiUrl,data,{withCredentials:true, observe: 'response'}).subscribe(response =>{
      console.log(response)
    })
  }

  getOne(announcementId: string): Observable<Announcement>{
    return this.httpClient.get<Announcement>(this.apiUrl + `/${announcementId}`, {withCredentials: true})
  }
}
