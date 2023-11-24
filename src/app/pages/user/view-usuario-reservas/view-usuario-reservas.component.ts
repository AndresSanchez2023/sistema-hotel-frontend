import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-view-usuario-reservas',
  templateUrl: './view-usuario-reservas.component.html',
  styleUrls: ['./view-usuario-reservas.component.css']
})
export class ViewUsuarioReservasComponent implements OnInit{
  usuarioId: any;
  reservas:any = [];

  constructor (private route:ActivatedRoute, private reservaService:ReservaService, private loginService:LoginService) { }

  ngOnInit (): void{
    this.usuarioId = this.route.snapshot.params['usuarioId'];
    console.log(this.usuarioId);
    this.reservaService.listarReservasDeUsuario(this.usuarioId).subscribe(
      (dato:any) => {
        console.log(dato);
        this.reservas = dato;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
