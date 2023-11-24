import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http:HttpClient) { }

  public listarReservasDeHabitacion(habitacionId:any){
    return this.http.get(`${baseUrl}/reserva/habitacion/${habitacionId}`);
  }

  public listarReservasDeUsuario(usuarioId: any){
    return this.http.get(`${baseUrl}/reserva/usuario/${usuarioId}`);
  }

  public agregarReserva(reserva:any){
    return this.http.post(`${baseUrl}/reserva/`, reserva);
  }
}
