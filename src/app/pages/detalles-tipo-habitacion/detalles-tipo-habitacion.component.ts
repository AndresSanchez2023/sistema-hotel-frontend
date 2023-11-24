import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { LoginService } from 'src/app/services/login.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { TipoHabitacionService } from 'src/app/services/tipo-habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-tipo-habitacion',
  templateUrl: './detalles-tipo-habitacion.component.html',
  styleUrls: ['./detalles-tipo-habitacion.component.css']
})
export class DetallesTipoHabitacionComponent implements OnInit {
  tipoHabitacion: any;
  tipoHabitacionId: any;
  checkInDate: Date = new Date;
  checkOutDate: Date = new Date;
  detalleReserva: any;

  constructor(
    private route: ActivatedRoute,
    private tipoHabitacionService: TipoHabitacionService,
    private snackBar: MatSnackBar,
    private habitacionService: HabitacionService,
    private loginService: LoginService,
    private router: Router,
    private reservaService: ReservaService
  ) { }

  ngOnInit(): void {
    this.tipoHabitacionId = this.route.snapshot.params['tipoHabitacionId'];
    this.tipoHabitacionService.listarTipoHabitacionPorId(this.tipoHabitacionId).subscribe(
      (dato: any) => {
        this.tipoHabitacion = dato;
        //console.log(this.tipoHabitacion);
      },
      (error: any) => {
        console.log(error);
        Swal.fire('Error', 'Error al cargar el tipo de habitacion', 'error');
      }
    )
    this.restablecerEstadoReserva();
  }

  private restablecerEstadoReserva() {
    const datosReservaGuardados = localStorage.getItem('datosReserva');
    if (datosReservaGuardados) {
      const datosReserva = JSON.parse(datosReservaGuardados);
      this.checkInDate = new Date(datosReserva.checkInDate);
      this.checkOutDate = new Date(datosReserva.checkOutDate);
      this.detalleReserva = {
        costoTotal: datosReserva.costoTotal,
        habitacionId: datosReserva.habitacionId,
        diasEstancia: datosReserva.diasEstancia
      };

      // Opcional: Limpia los datos guardados después de su uso
      localStorage.removeItem('datosReserva');
    }
  }

  verificarDisponibilidad(tipoHabitacionId: number, fechaInicio: Date, fechaFin: Date) {
    if (!this.checkInDate || !this.checkOutDate) {
      this.snackBar.open('Por favor, seleccione las fechas de check-in y check-out.', 'Cerrar', {
        duration: 3000, // Duración del mensaje en milisegundos
      });
      return;
    }

    if (this.checkInDate >= this.checkOutDate) {
      this.snackBar.open('La fecha de check-in debe ser anterior a la fecha de check-out.', 'Cerrar', {
        duration: 3000,
      });
      return;
    }

    const fechaInicioFormatted = this.checkInDate.toISOString().split('T')[0];
    const fechaFinFormatted = this.checkOutDate.toISOString().split('T')[0];

    console.log(fechaInicioFormatted, fechaFinFormatted);

    this.habitacionService.verificarDisponibilidad(tipoHabitacionId, fechaInicioFormatted, fechaFinFormatted)
      .subscribe((dato) => {
        this.detalleReserva = dato;
        console.log(this.detalleReserva);
      },
        (error) => {
          Swal.fire('Error', 'Error al cargar el Detalle de la reserva', 'error');
        });
  }

  confirmarReserva() {
    if (!this.loginService.isLoggedIn()) {
      this.redirigirALogin();
    } else {
      // Proceder con la creación de la reserva
      this.crearReserva();
    }
  }

  redirigirALogin() {

    const datosReserva = {
      tipoHabitacionId: this.tipoHabitacionId,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      diasEstancia: this.detalleReserva.diasEstancia,
      costoTotal: this.detalleReserva.costoTotal,
      habitacionId: this.detalleReserva.habitacionId,
    };

    const rutaActual = this.router.url;
    localStorage.setItem('rutaPostLogin', rutaActual);

    localStorage.setItem('datosReserva', JSON.stringify(datosReserva));

    // Redirigir al usuario a la página de inicio de sesión
    Swal.fire('Upss', 'Antes de Reservar debe iniciar Sesion', 'warning');
    this.router.navigate(['/login']);
  }

  crearReserva() {
    let usuario = this.loginService.getUser();
    const reservaParaEnviar = {
      fechaInicio: this.checkInDate.toISOString().split('T')[0],
      fechaFin: this.checkOutDate.toISOString().split('T')[0],
      costoTotal: this.detalleReserva.costoTotal,
      estadoReserva: "CONFIRMADA",
      habitacion: {
        habitacionId: this.detalleReserva.habitacionId
      },
      usuario: {
        id: usuario.id
      }
    };
    console.log(reservaParaEnviar);

    this.reservaService.agregarReserva(reservaParaEnviar).subscribe(
      (dato) => {
        console.log(dato);
        Swal.fire('Reserva Creada', 'La Reserva ha sido creada con exito', 'success');
        this.router.navigate(['user-dashboard'])
      },
      (error) => {
        Swal.fire('Error', 'Error al crear la reserva', 'error')
      }
    )
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
