import { Component, OnInit } from '@angular/core';
import { TipoHabitacionService } from 'src/app/services/tipo-habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-tipos',
  templateUrl: './view-tipos.component.html',
  styleUrls: ['./view-tipos.component.css']
})
export class ViewTiposComponent implements OnInit{

  tipoHabitacion:any = [
    
  ]

  constructor(private tipoHabitacionService:TipoHabitacionService){

  }

  ngOnInit(): void{
    this.tipoHabitacionService.listarTipoHabitaciones().subscribe(
      (dato:any) =>{
        this.tipoHabitacion = dato;
        console.log(this.tipoHabitacion);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los tipos de habitaciones', 'error');
      }
    )
  }
}
