import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TipoHabitacionService {

  constructor(private http:HttpClient) { }

  public listarTipoHabitaciones(){
    return this.http.get(`${baseUrl}/tipoHabitacion/`);
  }

  public agregarTipoHabitacion(tipoHabitacion:any){
    return this.http.post(`${baseUrl}/tipoHabitacion/`, tipoHabitacion);
  }
}
