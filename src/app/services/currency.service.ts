import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../interfaces/currency.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  protected apiUrl = environment.api_Url + '/currency'
  protected httpClient = inject(HttpClient)

  constructor() { }

  getAll(): Observable<Currency[]>{
    return this.httpClient.get<Currency[]>(this.apiUrl, {withCredentials: true})
  }

  get(id: string): Observable<Currency>{
    return this.httpClient.get<Currency>(this.apiUrl + `/${id}`, {withCredentials: true})
  }
}
