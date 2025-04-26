import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentApp, CreateCommentDto, Publish } from '../interfaces/publish.interface';
import { PaginationResponse } from '../interfaces/generic.interface';

@Injectable({
  providedIn: 'root'
})
export class PublishService {
  private apiUrl = environment.api_Url + '/content'
  private httpClient = inject(HttpClient)

  constructor() { }



  getPublishes(): Observable<PaginationResponse<Publish[]>>{
    return this.httpClient
    .get<PaginationResponse<Publish[]>>(this.apiUrl + '/others', {withCredentials:true}).pipe(
      tap((response) =>{
        console.log(response)
      })
    )
  }


  getPublishUser(userName: string): Observable<PaginationResponse<Publish[]>>{
    return this.httpClient
    .get<PaginationResponse<Publish[]>>(this.apiUrl + `/${userName}`, {withCredentials: true})
  }


  getComentsPublish(postId: string): Observable<PaginationResponse<CommentApp[]>>{
    return this.httpClient.get<PaginationResponse<CommentApp[]>>(`${this.apiUrl }/publishes/${postId}/comments`, {withCredentials: true})
  }

  getRepliesComment(parrentId: string): Observable<PaginationResponse<CommentApp[]>>{
    return this.httpClient.get<PaginationResponse<CommentApp[]>>(`${this.apiUrl }/${parrentId}/replies`, {withCredentials: true})
  }



  createComment(comment: CreateCommentDto){
    return this.httpClient.post(`${this.apiUrl}/comment`,comment, {withCredentials: true, observe: 'response'})
  }

  toggleLike(postId:string){
    return this.httpClient.post(this.apiUrl + `/publish/${postId}/like`, {}, {withCredentials: true, observe: 'response'})
  }
}
