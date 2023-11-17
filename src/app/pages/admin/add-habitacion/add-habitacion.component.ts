import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { TipoHabitacionService } from 'src/app/services/tipo-habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-habitacion',
  templateUrl: './add-habitacion.component.html',
  styleUrls: ['./add-habitacion.component.css']
})
export class AddHabitacionComponent implements OnInit {

  tipoHabitaciones: any = [];

  estadosHabitacion: any = [];


  
  habitacionData = {
    numHabitacion: '',
    estadoHabitacion: {
      estadoHabitacionEnum: ''
    },
    tipoHabitacion: {
      tipoHabitacionId: ''
    }
  }
  

  constructor(
    private tipoHabitacionService: TipoHabitacionService,
    private habitacionService: HabitacionService,
    private snack: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.tipoHabitacionService.listarTipoHabitaciones().subscribe(
      (dato: any) => {
        this.tipoHabitaciones = dato;
        console.log(this.tipoHabitaciones);
      }, (error) => {
        console.log(error);
        Swal.fire('error !!', 'Error al cargar los datos', 'error');
      }
    )
    this.habitacionService.getEstadosHabitacion().subscribe(
      (dato: any) => {
        this.estadosHabitacion = dato;
        console.log(this.estadosHabitacion)
      }, (error) => {
        console.log(error);
        Swal.fire('error !!', 'Error al cargar los datos', 'error');
      }
    )
  }

  guardarHabitacion() {
    const habitacionParaEnviar = {
      numHabitacion: this.habitacionData.numHabitacion,
      estadoHabitacion: this.habitacionData.estadoHabitacion.estadoHabitacionEnum,
      tipoHabitacion: this.habitacionData.tipoHabitacion
    };
    console.log(habitacionParaEnviar);
    if(habitacionParaEnviar.numHabitacion == '0' || habitacionParaEnviar.numHabitacion === '') {
      this.snack.open("El numero de habitacion es requerido",'', {
        duration:3000
      });
      return;
    }

    this.habitacionService.agregarHabitacion(habitacionParaEnviar).subscribe(
      (dato) => {
        console.log(dato);
        Swal.fire('Habitacion Guardada','La Habitacion ha sido guardada con exito','success');
        this.habitacionData = {
          numHabitacion : '',
          estadoHabitacion: {
            estadoHabitacionEnum: ''
          },
          tipoHabitacion: {
            tipoHabitacionId: ''
          }
        }
        this.router.navigate(['admin/habitaciones'])
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar la Habitacion', 'error')
      }
    )
  }
}
