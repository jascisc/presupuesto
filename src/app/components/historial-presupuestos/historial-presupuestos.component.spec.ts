import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialPresupuestosComponent } from './historial-presupuestos.component';

describe('HistorialPresupuestosComponent', () => {
  let component: HistorialPresupuestosComponent;
  let fixture: ComponentFixture<HistorialPresupuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialPresupuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialPresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
