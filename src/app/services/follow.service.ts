import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  apiUrl = environment.api_Url + '/followers'
  httpClient = inject(HttpClient)
  constructor() { }



  followSomeone(userId:string){
    this.httpClient.post(this.apiUrl + `/follow/${userId}`, {},{withCredentials:true, observe:'response'})
  }


  unfollowSomeone(userId: string){
    this.httpClient.delete(this.apiUrl + `/unfollow/${userId}`, { withCredentials: true, observe: 'response'})
  }
}
