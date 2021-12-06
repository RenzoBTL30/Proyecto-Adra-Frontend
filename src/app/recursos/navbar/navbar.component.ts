import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/presentation/views/login/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'adra-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../estilos/recursos.styles.css']
})
export class NavbarComponent implements OnInit {
  
  
  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    let username = this.authService.usuario.nu_dni;
    this.authService.logout();
    swal.fire('Logout', `Hola ${username} has cerrado sesión con exito`, 'success');
    this.router.navigate(['/posts']);
  }

}
