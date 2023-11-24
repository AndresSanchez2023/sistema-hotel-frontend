import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoHabitacionComponent } from './detalles-tipo-habitacion.component';

describe('DetallesTipoHabitacionComponent', () => {
  let component: DetallesTipoHabitacionComponent;
  let fixture: ComponentFixture<DetallesTipoHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesTipoHabitacionComponent]
    });
    fixture = TestBed.createComponent(DetallesTipoHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
