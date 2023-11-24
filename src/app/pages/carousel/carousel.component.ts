import { Component, Input, OnInit } from '@angular/core';
import { TipoHabitacionService } from 'src/app/services/tipo-habitacion.service';
import { ICarouselItem } from './Icarousel-item.metadata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  /**
   * Custom Properties
   */
  tipoHabitaciones: any = [];
  @Input() height = 500;
  @Input() isFullScreen = false;
  carouselItems: ICarouselItem[] = [];

  /**
   * Final Properties
   */

  public finalHeight: string | number = 0;
  public currentposition = 0;
  constructor(private tipoHabitacionService: TipoHabitacionService, private router:Router) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.tipoHabitacionService.listarTipoHabitaciones().subscribe(tipos => {
      this.tipoHabitaciones = tipos;
      this.carouselItems = this.tipoHabitaciones.map((tipo: any, index: number) => ({
        id: index,
        tipoHabitacionId: tipo.tipoHabitacionId,
        nombre: tipo.nombre,
        descripcion: tipo.descripcion,
        marginLeft: 0,
      }));
    })
  }

  setCurrentPosition(position: number) {
    this.currentposition = position;
    const item = this.encontrarElementoCarruselPorId(0);

    if (item) {
      item.marginLeft = -100 * position;
    } else {
      console.log('Elemento con id 0 no encontrado.');
    }
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentposition + 1;

    if (nextPosition <= this.carouselItems.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }

    const item = this.encontrarElementoCarruselPorId(0);
    if (item) {
      item.marginLeft = finalPercentage;
      this.currentposition = nextPosition;
    }
  }

  encontrarElementoCarruselPorId(id: number) {
    return this.carouselItems.find(i => i.id === id);
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentposition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.carouselItems.length - 1;
      finalPercentage = -100 * backPosition;
    }
    const item = this.encontrarElementoCarruselPorId(0);
    if (item) {
      item.marginLeft = finalPercentage;
      this.currentposition = backPosition;
    }
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

  verDetalles(tipoHabitacionId: number) {
    // Navegar a la ruta de detalles y pasar el ID como parámetro
    this.router.navigate(['/detalles-tipo-habitacion', tipoHabitacionId]);
  }
}
