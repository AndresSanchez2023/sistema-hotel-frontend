import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-habitaciones',
  templateUrl: './view-habitaciones.component.html',
  styleUrls: ['./view-habitaciones.component.css']
})
export class ViewHabitacionesComponent implements OnInit {

  habitaciones: any = [

  ]

  constructor(private habitacionService: HabitacionService) { }

  ngOnInit(): void {
    this.habitacionService.listarHabitaciones().subscribe(
      (dato: any) => {
        this.habitaciones = dato;
        console.log(this.habitaciones);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al cargar las habitaciones', 'error');
      }
    )
  }

  eliminarHabitacion(habitacionId: any) {
    Swal.fire({
      title: 'Eliminar Habitacion',
      text: 'Está seguro de eliminar la Habitacion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.habitacionService.eliminarHabitacion(habitacionId).subscribe(
          (data) => {
            this.habitaciones = this.habitaciones.filter((habitacion: any) => habitacion.habitacionId != habitacionId);
            Swal.fire('Habitacion eliminada', 'La Habitacion ha sido eliminada', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar la Habitacion')
          }
        )
      }
    })
  }

  getImageUrl(tipoHabitacion: string): string {
    switch (tipoHabitacion) {
      case 'Sencilla':
        return '../../../../assets/sencilla.jpg';
      case 'Individual':
        return '../../../../assets/individual.jpg';
      case 'Matrimonial':
        return '../../../../assets/matrimonial.jpg';
      case 'Suite':
        return '../../../../assets/suite.jpg';
      case 'Presidencial':
        return '../../../../assets/presidencial.jpg';
      default:
        return '../../../../assets/standart.png';
    }
  }
}
