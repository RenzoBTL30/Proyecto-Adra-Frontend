import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  private url = ('http://localhost:9292/api/recursos/all')

  constructor(private http: HttpClient) { }

  getrecursos(): any{
    return this.http.get<any>(this.url);
  }
}
