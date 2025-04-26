import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal, effect } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { CreatePostComponent } from 'src/app/home/components/create-post/create-post.component';
import { ApiResponse } from 'src/app/interfaces/generic.interface';
import { UserDto, UserInitialState } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { AuthStatus, LoginRequest, RegisterRequest } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _api_url = environment.api_Url
  private _httpClient = inject(HttpClient)
  private _user = signal<UserDto | null>(JSON.parse(localStorage.getItem('user')!))
  private _authStatus = signal<AuthStatus>('checking')

  user = computed<UserDto | null>(() => this._user())

  authStatus = computed<AuthStatus>(() => {
    if(this._authStatus() === 'checking') return 'checking'

    if(this._user() != null) return 'authenticated'

    return 'not-authenticated'
  })
  constructor() { }


  login(user: LoginRequest): Observable<ApiResponse<UserDto>>{
    console.log(user)
    return this._httpClient
    .post<ApiResponse<UserDto>>(this._api_url+'/auth/login',user,{observe:'response',withCredentials: true})
    .pipe(
      map((response: HttpResponse<any>) =>{
        console.log(response)
        return {
          message: response.body.message,
          statusCode: response.status,
          hasError: false,
          isSuccess: true,
          data:response.body.userData
        }
      }),
      tap(response =>{
        this._user.set(response.data)
        localStorage.setItem('user', response.data)
        this._authStatus.set('authenticated')
      }),
      catchError((error: HttpErrorResponse) => {
        this._user.set(UserInitialState)
        localStorage.removeItem('user')
        this._authStatus.set('not-authenticated')
        return of({
          statusCode: error.status,
          hasError: true,
          isSuccess: false,
          errorMessage: error.message
        });
      })
    )
  }


  register(user: RegisterRequest): Observable<ApiResponse<UserDto>>{
    console.log(user)
    return this._httpClient
    .post<ApiResponse<UserDto>>(this._api_url+'/user/register',user,{withCredentials: true,observe:'response'})
    .pipe(
      map((response: HttpResponse<any>) =>{
        console.log(response)
        return {
          message: response.body.message,
          statusCode: response.status,
          hasError: false,
          isSuccess: true,
          data:response.body.userData
        }
      }),
      tap(response =>{
        this._user.set(response.data)
        localStorage.setItem('user', response.data)
        this._authStatus.set('authenticated')
      }),
      catchError((error: HttpErrorResponse) => {
        this._user.set(UserInitialState)
        localStorage.removeItem('user')
        this._authStatus.set('not-authenticated')
        console.log(error)
        return of({
          statusCode: error.error.status,
          hasError: true,
          isSuccess: false,
          errorMessage: error.error.message
        });
      })
    )
  }

  checkStatus():Observable<boolean>{
    return this._httpClient
    .get(this._api_url + '/auth/validate', {withCredentials:true, observe:'response'})
    .pipe(
      map((response: HttpResponse<any>) =>{
        console.log(response)
        if(response.body.isValid)
          return true
        else{
          this.logout()
          return false
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.logout()
        return of(false);
      })
    )
  }

  logout():Observable<{success:boolean}>{
    return this._httpClient.post(this._api_url+'/auth/logout',{}, {withCredentials: true, observe:'response'})
    .pipe(
      map((response: HttpResponse<any>) =>{
        console.log(response)

        if(response.body.success)
        {
          console.log('se reseteo')
          this.resetData()
          return {success :true}
        }
        else return {success :false}
      } ),

    )
  }

  private resetData(){
    localStorage.removeItem('user')
    this._user.set(null)
    this._authStatus.set('not-authenticated')
  }
}
