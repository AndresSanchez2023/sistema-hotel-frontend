import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": '',
  }

  constructor(private snack: MatSnackBar, private loginServices: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000
      })
      return;
    }

    if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000
      })
    }

    this.loginServices.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);

        this.loginServices.loginUser(data.token);
        this.loginServices.getCurrentUser().subscribe((user:any) => {
          this.loginServices.setUser(user);
          console.log(user);

          if(this.loginServices.getUserRole() == "ADMIN"){
            //Dashboard admin
            //window.location.href = '/admin';
            //this.router.navigate(['admin']);
            this.postLoginRedirect('admin');
            this.loginServices.loginStatusSubjec.next(true);
          }else if(this.loginServices.getUserRole() == "Normal"){
            //this.router.navigate(['user-dashboard']);
            this.postLoginRedirect('user-dashboard');
            this.loginServices.loginStatusSubjec.next(true);
          }else{
            this.loginServices.logout();
          }
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles invalidos, vuelva a intentar !!', 'Aceptar',{
          duration: 3000
        })
      }
    )
  }

  postLoginRedirect(ruta:any) {
    const rutaPostLogin = localStorage.getItem('rutaPostLogin');
    
    if (rutaPostLogin) {
      this.router.navigate([rutaPostLogin]);
      localStorage.removeItem('rutaPostLogin'); // Limpieza
    } else {
      // Redirigir a una ruta por defecto si no hay ruta guardada
      this.router.navigate([ruta]);
    }
  }
}
