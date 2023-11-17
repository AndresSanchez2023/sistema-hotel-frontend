import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTiposComponent } from './view-tipos.component';

describe('ViewTiposComponent', () => {
  let component: ViewTiposComponent;
  let fixture: ComponentFixture<ViewTiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTiposComponent]
    });
    fixture = TestBed.createComponent(ViewTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
