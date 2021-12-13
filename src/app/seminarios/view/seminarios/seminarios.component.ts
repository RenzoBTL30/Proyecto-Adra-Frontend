import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/presentation/views/login/auth.service';
import { Afiliacion } from 'src/app/models/afiliacion';
import { ControlVista } from 'src/app/models/control_vista';
import { SeminarioList } from 'src/app/models/seminarioList';
import { SesionSocio } from 'src/app/models/sesion_socio';
import { AfiliacionService } from 'src/app/servicios/afiliacion.service';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';
import { ControlvistaService } from 'src/app/servicios/controlvista.service';
import { SesionsocioService } from 'src/app/servicios/sesionsocio.service';
import { SocioService } from 'src/app/servicios/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'adra-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrls: ['./seminarios.component.css']
})
export class SeminariosComponent implements OnInit {

  seminarios: SeminarioList[]=[];
  afiliaciones: Afiliacion[]=[];

  control_vista:ControlVista= new ControlVista();

  rol:any
  hoy:Date = new Date();
  fecha:any;
  hora:any;
  idafiliacion:any;
  idsocio:any;
  idsesion:any;
  idcapac:any;
  valoracion:any;

  fechaActual:Date=new Date();
  sesion_socio:SesionSocio = new SesionSocio();

  validador:any;
  validador2:any;
  validador3:any;

  fechayhora:any

  @ViewChild('muysatisfecho') muysatis?: ElementRef;
  @ViewChild('closebutton') closebutton:any;


  constructor(private controlService: ControlvistaService,private socioService: SocioService, private afiliacionService: AfiliacionService,private sesionsocioService: SesionsocioService, private authService: AuthService, private capacitacionService: CapacitacionService) {
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

  compararFechas(fecha:Date){
    if (this.fechaActual.getTime() >= new Date(fecha).getTime()) {
        this.validador=true
        return true;
    } else{
        this.validador=false
        return false;
    }
  }

  mostrarEncuesta(){
    setTimeout(() => {
      this.validador2=1;
    }, 5000);

  }

  mostrarEncuestaFinalizada(){
    setTimeout(() => {
      this.validador2=2;
    }, 2000);

  }

  contador = 0;
  onKey(event: any){
    this.contador = event.target.value.length;
  }

  enviarvaloracion(valor:number){
    console.log("Valoracion = " + valor);

    this.valoracion = valor;
    console.log("idafiliacion para valoracion: " + this.idafiliacion);
    console.log("idsesion para valoracion: " + this.idsesion);
    console.log("idcap para valoracion: " + this.idcapac);
    this.control_vista.recurso.tipo_recurso.id=3;

    this.sesionsocioService.updatevaloracion(this.idafiliacion, this.idsesion, this.valoracion, this.control_vista.de_comentario).subscribe(
      res=>{
        this.closebutton.nativeElement.click();
        this.mostrarEncuestaFinalizada();
          }
        );
     
    Swal.fire('Completado', `La valoración ha sido registrada correctamente`, 'success')
    
  }

  obteneridSesion(idses: number, idcap: number){

    let token = sessionStorage.getItem('token');
    let tokenstring = JSON.stringify(token);
    let payload = JSON.parse(atob(tokenstring.split('.')[1]));

  
    let idusuario;
    idusuario = payload.idusuario;
    let id = parseInt(idusuario);
    console.log(id);

    this.socioService.getSocios().subscribe(data =>{
      let listSocios = data;

      let result = listSocios.find(x => x.persona.id == id);

      this.idsocio = result?.id;

    });
    
    this.afiliacionService.getAfiliaciones().subscribe(data =>{
      this.afiliaciones= data;
      
      let result = this.afiliaciones.find(x => x.socio.id == this.idsocio && x.capacitacion.id == this.idcapac);

      this.idafiliacion = result?.id;


    });

    this.idsesion = idses;
    this.idcapac = idcap;
    //console.log("idsesion para valoracion: " + this.idsesion);
    //console.log("idcap para valoracion: " + this.idcapac);

    //console.log("valoracion lista para enviar: " + this.valoracion)

    //this.sesionsocioService.updatevaloracion(this.idafiliacion, this.idsesion);
  }

  
}
