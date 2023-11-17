import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHabitacionesComponent } from './view-habitaciones.component';

describe('ViewHabitacionesComponent', () => {
  let component: ViewHabitacionesComponent;
  let fixture: ComponentFixture<ViewHabitacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHabitacionesComponent]
    });
    fixture = TestBed.createComponent(ViewHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
