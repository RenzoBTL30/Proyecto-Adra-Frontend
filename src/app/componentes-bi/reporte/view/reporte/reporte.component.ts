import { Component, OnInit } from '@angular/core';
import { BancoComunal } from 'src/app/models/banco_comunal';
import { Reporte1 } from 'src/app/models/reporte1';
import { Reporte2 } from 'src/app/models/reporte2';
import { Reporte3 } from 'src/app/models/reporte3';
import { Reporte4 } from 'src/app/models/reporte4';
import { Reporte5 } from 'src/app/models/reporte5';
import { Reporte6 } from 'src/app/models/reporte6';
import { BancocomunalService } from 'src/app/servicios/bancocomunal.service';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';
import { ReporteService } from 'src/app/servicios/reporte.service';

@Component({
  selector: 'adra-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  bancosComunal: BancoComunal[]=[];

  reporte1:Reporte1[]=[];
  reporte2:Reporte2[]=[];
  reporte3:Reporte3[]=[];
  reporte4:Reporte4[]=[];
  reporte5:Reporte5[]=[];
  reporte6:Reporte6[]=[];

  validador:any;

  optionValue_a:any;
  idbancocomunal:any;
  tipReporteBanco:any;
  tipReporteUsuario:any;

  titulos1: string[]=["Nombre","Apellido Paterno","DNI","Estado"];
  titulos2: string[]=["Nombre","Apellido Paterno","DNI","Rol"];
  titulos3: string[]=["Capacitación","Nombre","Apellido Paterno","Recursos Vistos","Total de Recursos","Progreso"];
  titulos4: string[]=["Nombre","Apellido Paterno","Seminario","Comentario","Valoración"];
  titulos5: string[]=["Nombre","Apellido Paterno","Apellido Materno","Correo Electrónico","Teléfono","Banco Comunal","Asesor"];
  titulos6: string[]=["Capacitación","Banco Comunal","Valoración"];


  constructor(private bancocomunalService: BancocomunalService, private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.listarBancos();
  }

  listarBancos(){
    this.bancocomunalService.getBancos().subscribe(data =>{
      this.bancosComunal= data;
    });
  }

  redondear(progreso:any){
    return Math.round(progreso*100)/100;
  }

  generar(){
    if (this.optionValue_a == 1) {
      if (this.tipReporteUsuario == 5) {

        this.validador=1;

        this.reporteService.getUsuariosActivos().subscribe(data =>{
          this.reporte1= data;
        });

      } else {
        if (this.tipReporteUsuario == 6) {

          this.validador=2;

          this.reporteService.getUsuariosRoles().subscribe(data =>{
            this.reporte2= data;
          });

        }

      }

    } else {
      if(this.optionValue_a == 2){
        if (this.tipReporteBanco == 1) {

          console.log(this.idbancocomunal);

          this.validador=5

          this.reporteService.getSociosporBanco(this.idbancocomunal).subscribe(data =>{
            this.reporte5= data;
          });
          
        } else {
          if (this.tipReporteBanco == 2) {
            
            this.validador=4

            this.reporteService.getReporteAsistSem(this.idbancocomunal).subscribe(data =>{
              this.reporte4= data;
            });

          } else {
            if (this.tipReporteBanco == 3) {
              
              this.validador=3

              this.reporteService.getReporteProgreso(this.idbancocomunal).subscribe(data =>{
                this.reporte3= data;
              });

            } else {
              if (this.tipReporteBanco == 4) {

                this.validador=6

                this.reporteService.getReporteSatisfac(this.idbancocomunal).subscribe(data =>{
                  this.reporte6= data;
                });
                
              } 
            }
            
          }

        }

      }

    }
  }

}
