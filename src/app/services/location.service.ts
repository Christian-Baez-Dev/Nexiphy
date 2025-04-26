import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {LocationI } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  protected apiUrl = environment.api_Url + '/location'
  protected httpClient = inject(HttpClient)

  constructor() { }

  getAllCountris() : Observable<LocationI[]>{
    return this.httpClient.get<LocationI[]>(this.apiUrl + '/GetCountries', {withCredentials: true})
  }

  getAllProvinceByCountry(id: string): Observable<LocationI[]>{
    return this.httpClient.get<LocationI[]>(this.apiUrl + `/GetProvinceByCountry/${id}`, {withCredentials: true})
  }

  getAllMunicipalityByProvince(id: string): Observable<LocationI[]>{
    return this.httpClient.get<LocationI[]>(this.apiUrl + `/GetMunicipalityByProvince/${id}`, {withCredentials: true})
  }
}
