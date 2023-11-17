import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarHabitacionComponent } from './actualizar-habitacion.component';

describe('ActualizarHabitacionComponent', () => {
  let component: ActualizarHabitacionComponent;
  let fixture: ComponentFixture<ActualizarHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarHabitacionComponent]
    });
    fixture = TestBed.createComponent(ActualizarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
