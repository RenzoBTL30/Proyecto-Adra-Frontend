import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitacion } from 'src/app/models/capacitacion';
import { Tipo_Capacitacion } from 'src/app/models/tipo_capacitacion';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'adra-gestion-modulo',
  templateUrl: './gestion-modulo.component.html',
  styleUrls: ['./gestion-modulo.component.css']
})
export class GestionModuloComponent implements OnInit {

  capacitaciones: Capacitacion[]=[];
  
  contador = 0;
  @ViewChild('closebutton') closebutton:any;
  @ViewChild('closebutton2') closebutton2:any;
  
  @ViewChild('nombre') nombre:any;
  @ViewChild('descripcion') descripcion:any;

  @ViewChild('nombre_edit') nombre_edit:any;
  @ViewChild('descripcion_edit') descripcion_edit:any;

  constructor(private capacitacionService: CapacitacionService, private router:Router) {
    
  }
  
  capacitacion: Capacitacion = new Capacitacion();
  tipo_capacitacion: Tipo_Capacitacion = new Tipo_Capacitacion();

  capacitacion_editar: Capacitacion = new Capacitacion();

  ngOnInit(): void {
    this.capacitacionService.getCapacitaciones().subscribe(data =>{
      this.capacitaciones= data;

    });
    this.capacitacion.tipo_capacitacion.id = 1;
    this.capacitacion.tipo_capacitacion.no_tipo_capacitacion = "Modulo";
  }

  onKey(event: any){
    this.contador = event.target.value.length;
  }

  crear(){
    this.capacitacionService.create(this.capacitacion).subscribe(
      res=>{
        this.closebutton.nativeElement.click()
        this.listar();
        this.limpiar();
      }
    );
    Swal.fire('Completado', `El modulo ha sido creado satisfactoriamente`, 'success')
  }

  listar(){
    this.capacitacionService.getCapacitaciones().subscribe(data =>{
      this.capacitaciones= data;
    });
  }

  limpiar(){
    this.nombre.nativeElement.value = '';
    this.descripcion.nativeElement.value = '';
    this.contador = 0;
  }

  delete(capacitacion:Capacitacion){
    console.log('Delete');

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.capacitacionService.delete(capacitacion).subscribe(
          res=>this.listar()
        );
      }
    })
  }  

  cargarDatos(id:number){
    this.capacitacionService.getCapacitacionId(id).subscribe(
      es=>{
        //Esta linea es la que remplaza los datos en el ngModel
        this.capacitacion_editar=es

        let nombre = es.no_capacitacion;
        let descripcion = es.de_capacitacion;
        
        this.nombre_edit.nativeElement.value = nombre;
        this.descripcion_edit.nativeElement.value = descripcion
      }
    );
  }

  editar(){
    this.capacitacionService.update(this.capacitacion_editar).subscribe(
      res=>{
        this.closebutton2.nativeElement.click()
        this.listar();
      }
    );
    Swal.fire('Completado', `El modulo ha sido editado satisfactoriamente`, 'success')
  }
}
