import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl =  environment.api_Url + '/profile'
  httpClient = inject(HttpClient)

  constructor() { }

  getProfile(userName: string): Observable<UserProfile>{
    return this.httpClient.get<UserProfile>(this.apiUrl + `/${userName}`, {withCredentials: true}).pipe(
      tap((response) =>{
        console.log(response)
      })
    )
  }
}
