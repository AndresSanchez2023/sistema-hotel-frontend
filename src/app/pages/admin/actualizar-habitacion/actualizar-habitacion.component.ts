import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { TipoHabitacionService } from 'src/app/services/tipo-habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-habitacion',
  templateUrl: './actualizar-habitacion.component.html',
  styleUrls: ['./actualizar-habitacion.component.css']
})
export class ActualizarHabitacionComponent implements OnInit{

  constructor(private route:ActivatedRoute, 
    private habitacionService:HabitacionService,
    private tipoHabitacionService:TipoHabitacionService,
    private router:Router){ }

  habitacionId = 0;
  habitacion:any;
  estadoHabitacion:any;
  tipoHabitaciones:any;
  
  ngOnInit(): void{
    this.habitacionId = this.route.snapshot.params['habitacionId'];
    this.habitacionService.obtenerHabitacion(this.habitacionId).subscribe(
      (dato) => {
        this.habitacion = dato;
        console.log(this.habitacion);
      },
      (error) => {
        console.log(error);
      }
    )
    this.habitacionService.getEstadosHabitacion().subscribe(
      (dato: any) => {
        this.estadoHabitacion = dato;
      }, (error) => {
        console.log(error);
        Swal.fire('error !!', 'Error al cargar los datos', 'error');
      }
    )
    this.tipoHabitacionService.listarTipoHabitaciones().subscribe(
      (dato:any) => {
        this.tipoHabitaciones = dato;
      },
      (error) => {
        alert('Error al cargar los tipos de habitaciones');
      }
    )
  }

  public actualizarDatos(){
    const habitacionParaEnviar = {
      habitacionId: this.habitacionId, // Asegúrate de incluir el ID
      numHabitacion: this.habitacion.numHabitacion,
      estadoHabitacion: this.habitacion.estadoHabitacion,
      tipoHabitacion: this.habitacion.tipoHabitacion
    };
    
    this.habitacionService.actualizarHabitacion(habitacionParaEnviar).subscribe(
      (dato) => {
        Swal.fire('Habitacion actualizada','La Habitacion ha sido actualizada con exito','success').then(
          (h) => {
            this.router.navigate(['/admin/habitaciones']);
          }
        );
      },
      (error) => {
        Swal.fire('Error','No se ha podido actualizar la Habitacion','error');
        console.log(error);
      }
    )
  }

}
