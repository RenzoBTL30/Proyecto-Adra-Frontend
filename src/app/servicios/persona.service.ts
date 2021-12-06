import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { AuthService } from '../core/presentation/views/login/auth.service';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlpersona:string ='http://localhost:9292/api/personas';
  constructor(private http : HttpClient, private router: Router, private authService: AuthService) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }
    return this.httpHeaders;
  }

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlpersona + '/all',{headers: this.agregarAuthorizationHeader()});    
  }

  getPersonaId(id:number): Observable<Persona>{
    return this.http.get<Persona>(`${this.urlpersona}/all/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e=>{
        if(e.status != 401 && e.error.mensaje){
          
        }
        return throwError(0);
      }));
  }

}
