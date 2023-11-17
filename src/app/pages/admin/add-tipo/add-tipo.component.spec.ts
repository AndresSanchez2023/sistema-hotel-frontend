import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoComponent } from './add-tipo.component';

describe('AddTipoComponent', () => {
  let component: AddTipoComponent;
  let fixture: ComponentFixture<AddTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTipoComponent]
    });
    fixture = TestBed.createComponent(AddTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
