import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../core/presentation/views/login/auth.service';
import { Afiliacion } from '../models/afiliacion';

@Injectable({
  providedIn: 'root'
})
export class AfiliacionService {

  private urlafil:string ='http://localhost:9292/api/afiliaciones';
  constructor(private http : HttpClient, private router: Router, private authService: AuthService) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }

  getAfiliaciones():Observable<Afiliacion[]>{
    return this.http.get<Afiliacion[]>(this.urlafil + '/all',{headers: this.agregarAuthorizationHeader()});    
  }

  getAfiliacionId(id:number): Observable<Afiliacion>{
    return this.http.get<Afiliacion>(`${this.urlafil}/all/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e=>{
        if(e.status != 401 && e.error.mensaje){
          
        }
        return throwError(0);
      }));
  }
}
