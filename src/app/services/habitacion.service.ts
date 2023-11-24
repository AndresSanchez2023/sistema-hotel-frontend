import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http:HttpClient) { }

    public listarHabitaciones(){
    return this.http.get(`${baseUrl}/habitacion/`);
    }

    public getEstadosHabitacion(){
      return this.http.get(`${baseUrl}/habitacion/estados`);
    }

    public agregarHabitacion(habitacion:any){
      return this.http.post(`${baseUrl}/habitacion/`,habitacion)
    }

    public eliminarHabitacion(habitacionId:any){
      return this.http.delete(`${baseUrl}/habitacion/${habitacionId}`)
    }

    public obtenerHabitacion(habitacionId:any){
      return this.http.get(`${baseUrl}/habitacion/${habitacionId}`);
    }

    public actualizarHabitacion(habitacion:any){
      return this.http.put(`${baseUrl}/habitacion/`,habitacion);
    }

    public verificarDisponibilidad(tipoHabitacionId: number, fechaInicio: string, fechaFin: string){
      return this.http.get(`${baseUrl}/habitacion/disponibilidad`, {
        params: new HttpParams()
          .set('tipoHabitacionId', tipoHabitacionId.toString())
          .set('fechaInicio', fechaInicio) // Formato 'YYYY-MM-DD'
          .set('fechaFin', fechaFin) // Formato 'YYYY-MM-DD'
        });
    }
}
