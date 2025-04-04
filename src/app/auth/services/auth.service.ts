import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { CreatePostComponent } from 'src/app/home/components/create-post/create-post.component';
import { ApiResponse } from 'src/app/interfaces/generic.interface';
import { UserDto } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { AuthStatus, LoginRequest, RegisterRequest } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _api_url = environment.api_Url + '/auth'
  private _httpClient = inject(HttpClient)
  private _user = signal<UserDto | null >(null)
  private _authStatus = signal<AuthStatus>('checking')


  user = computed<UserDto | null>(() => this._user())

  authStatus = computed<AuthStatus>(() => {
    if(this._authStatus() === 'checking') return 'checking'

    if(this._user() != null) return 'authenticated'

    return 'not-authenticated'
  })
  constructor() { }


  login(user: LoginRequest): Observable<ApiResponse<UserDto>>{
    return this._httpClient
    .post<ApiResponse<UserDto>>(this._api_url+'/login',user,{observe:'response',withCredentials: true})
    .pipe(
      map((response: HttpResponse<any>) =>{
        return {
          message: response.body.message,
          statusCode: response.status,
          hasError: false,
          isSucces: true,
          data:response.body.user
        }
      }),
      tap(response =>{
        this._user.set(response.data)
        this._authStatus.set('authenticated')
      }),
      catchError((error: HttpErrorResponse) => {
        this._user.set(null)
        this._authStatus.set('not-authenticated')
        return of({
          statusCode: error.status,
          hasError: true,
          isSucces: false,
          errorMessage: error.message
        });
      })
    )
  }


  register(user: RegisterRequest): Observable<ApiResponse<UserDto>>{
    return this._httpClient
    .post<ApiResponse<UserDto>>(this._api_url+'/register',user,{observe:'response'})
    .pipe(
      map((response: HttpResponse<any>) =>{
        return {
          message: response.body.message,
          statusCode: response.status,
          hasError: false,
          isSucces: true,
          data:response.body.user
        }
      }),
      tap(response =>{
        this._user.set(response.data)
        this._authStatus.set('authenticated')
      }),
      catchError((error: HttpErrorResponse) => {
        this._user.set(null)
        this._authStatus.set('not-authenticated')
        return of({
          statusCode: error.status,
          hasError: true,
          isSucces: false,
          errorMessage: error.message
        });
      })
    )
  }

  checkStatus():Observable<boolean>{
    return this._httpClient
    .get(this._api_url + '/validate', {withCredentials:true})
    .pipe(
      map(respose =>true),
      catchError((error: HttpErrorResponse) => {
        this.logout()
        return of(false);
      })
    )
  }

  logout(){
    this._user.set(null)
    this._authStatus.set('not-authenticated')
  }
}
