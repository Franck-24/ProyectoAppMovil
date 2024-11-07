import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadHorasPage } from './disponibilidad-horas.page';

describe('DisponibilidadHorasPage', () => {
  let component: DisponibilidadHorasPage;
  let fixture: ComponentFixture<DisponibilidadHorasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadHorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
