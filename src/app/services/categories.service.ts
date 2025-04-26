import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  protected apiUrl = environment.api_Url + '/categories'
  protected httpClient = inject(HttpClient)
  constructor() { }

  getAll(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(this.apiUrl, {withCredentials: true})
  }

  getById(id: string): Observable<Categorie>{
    return this.httpClient.get<Categorie>(this.apiUrl, {withCredentials: true})
  }
}
