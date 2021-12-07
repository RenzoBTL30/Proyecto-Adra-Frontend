import { Component, OnInit } from '@angular/core';
import { Capacitacion } from 'src/app/models/capacitacion';
import { CapacitacionService } from 'src/app/servicios/capacitacion.service';

@Component({
  selector: 'adra-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  capacitaciones: Capacitacion[]=[];

  constructor(private capacitacionService: CapacitacionService) { }

  ngOnInit(): void {
    
  }

  listar(){
    this.capacitacionService.getCapacitaciones().subscribe(data =>{
      this.capacitaciones= data;
    });
  }

  

}
