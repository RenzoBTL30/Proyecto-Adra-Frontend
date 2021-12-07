import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/presentation/views/login/auth.service';
import { SeminarioList } from 'src/app/models/seminarioList';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';

@Component({
  selector: 'adra-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrls: ['./seminarios.component.css']
})
export class SeminariosComponent implements OnInit {

  seminarios: SeminarioList[]=[];
  rol:any
  hoy:Date = new Date();
  fecha:any;
  hora:any;

  fechayhora:any

  constructor(public authService: AuthService, private capacitacionService: CapacitacionService) {
    this.fecha = this.hoy.getDate() + '-' + (this.hoy.getMonth() + 1) + this.hoy.getFullYear;
    this.hora = this.hoy.getHours() + ':' + this.hoy.getMinutes() + ':' + this.hoy.getSeconds();
    this.fechayhora = this.fecha + ' ' + this.hora;
   }

  ngOnInit(): void {
    this.obtenerRol();
    this.listarSeminarios();
  }

  listarSeminarios(){
    this.capacitacionService.getSeminarios().subscribe(data =>{
      this.seminarios=data;
    });
  }
  
  obtenerRol():any{

    let usuario = this.authService.usuario;
    this.rol = usuario.roles[0];

  }  

}
