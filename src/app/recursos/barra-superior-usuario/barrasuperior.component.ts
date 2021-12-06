import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'adra-barrasuperior',
  templateUrl: './barrasuperior.component.html',
  styleUrls: ['../estilos/recursos.styles.css']
})

export class BarrasuperiorComponent implements OnInit {

  valor:any;
  Stringvalor:any;
  dni_global:any;
 

  constructor(private personaService: PersonaService) {
  
  }

  ngOnInit(): void {
    this.obtenerDatosTokenDNI();
  }

  obtenerDatosTokenDNI():any{
        let token = sessionStorage.getItem('token');
        let tokenstring = JSON.stringify(token);
        let payload = JSON.parse(atob(tokenstring.split('.')[1]));

        //let dni;
        //dni = payload.user_name;
      
        let idusuario;
        idusuario = payload.idusuario;
        let id = parseInt(idusuario);
        
        this.personaService.getPersonaId(id).subscribe(
           es=>{
              this.dni_global = es.no_persona;
           }     
        );
  }  

  getPersona(id:number){
    
  }
}



