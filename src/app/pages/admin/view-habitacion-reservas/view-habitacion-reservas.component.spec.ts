import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHabitacionReservasComponent } from './view-habitacion-reservas.component';

describe('ViewHabitacionReservasComponent', () => {
  let component: ViewHabitacionReservasComponent;
  let fixture: ComponentFixture<ViewHabitacionReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHabitacionReservasComponent]
    });
    fixture = TestBed.createComponent(ViewHabitacionReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
