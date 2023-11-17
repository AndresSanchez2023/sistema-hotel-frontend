import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-view-habitacion-reservas',
  templateUrl: './view-habitacion-reservas.component.html',
  styleUrls: ['./view-habitacion-reservas.component.css']
})
export class ViewHabitacionReservasComponent implements OnInit{
  
  habitacionId:any;
  numHabitacion:any;
  reservas:any = [];
  
  constructor(private route:ActivatedRoute, private reservaService:ReservaService){ }

  ngOnInit(): void{
    this.habitacionId = this.route.snapshot.params['habitacionId'];
    this.numHabitacion = this.route.snapshot.params['numHabitacion'];
    this.reservaService.listarReservasDeHabitacion(this.habitacionId).subscribe(
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
