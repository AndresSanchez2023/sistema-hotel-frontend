import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsuarioReservasComponent } from './view-usuario-reservas.component';

describe('ViewUsuarioReservasComponent', () => {
  let component: ViewUsuarioReservasComponent;
  let fixture: ComponentFixture<ViewUsuarioReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUsuarioReservasComponent]
    });
    fixture = TestBed.createComponent(ViewUsuarioReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
