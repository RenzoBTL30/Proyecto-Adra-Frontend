import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-gestion-modulo',
  templateUrl: './gestion-modulo.component.html',
  styleUrls: ['./gestion-modulo.component.css']
})
export class GestionModuloComponent implements OnInit {

  contador = 0;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  onKey(event: any){
    this.contador = event.target.value.length;
  }

  
}
