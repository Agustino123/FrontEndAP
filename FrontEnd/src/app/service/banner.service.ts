import { Injectable } from '@angular/core';
import { banner } from '../model/banner';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = 'https://backendap-production-021c.up.railway.app/banner/';
  // URL = 'http://localhost:8080/banner/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<banner[]>{
    return this.httpClient.get<banner[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<banner>{
    return this.httpClient.get<banner>(this.URL + `detail/${id}`);
  }

  public update(id:number, Persona: banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }
}
