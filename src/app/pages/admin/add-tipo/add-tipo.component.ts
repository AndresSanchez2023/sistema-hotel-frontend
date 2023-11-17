import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TipoHabitacionService } from 'src/app/services/tipo-habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipo',
  templateUrl: './add-tipo.component.html',
  styleUrls: ['./add-tipo.component.css']
})
export class AddTipoComponent implements OnInit{

  tipoHabitacion = {
    nombre : "",
    descripcion : "",
    capacidad : "",
    precio : ""
  }

  constructor(private tipoHabitacionService:TipoHabitacionService, private snack:MatSnackBar, private router:Router){}

  ngOnInit(): void {
      
  }

  formSubmit(){
    if(this.tipoHabitacion.nombre.trim()=='' || this.tipoHabitacion.nombre == null){
      this.snack.open("El nombre es requerido !! " , '' ,{
        duration:3000
      })
      return;
    }
    if(this.tipoHabitacion.descripcion.trim()=='' || this.tipoHabitacion.descripcion == null){
      this.snack.open("La descripcion es requerida !! " , '' ,{
        duration:3000
      })
    }
    if(this.tipoHabitacion.capacidad == '0' || this.tipoHabitacion.capacidad === ''){
      this.snack.open("El numero de perosonas permitidas es requerido !! " , '' ,{
        duration:3000
      })
    }
    if(this.tipoHabitacion.precio == '0' || this.tipoHabitacion.precio === ''){
      this.snack.open("El precio es requerido !! " , '' ,{
        duration:3000
      })
    }

    this.tipoHabitacionService.agregarTipoHabitacion(this.tipoHabitacion).subscribe(
      (dato:any) => {
        this.tipoHabitacion.nombre = '';
        this.tipoHabitacion.descripcion = '';
        this.tipoHabitacion.capacidad = '';
        this.tipoHabitacion.precio = '';
        Swal.fire('Tipo de Habitacion Agregado','El tipo de habitacion ha sido agregado con exito', 'success');
        this.router.navigate(["/admin/tipohab"]);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar el tipo de habitacion','error')
      }
    )

  }
}
