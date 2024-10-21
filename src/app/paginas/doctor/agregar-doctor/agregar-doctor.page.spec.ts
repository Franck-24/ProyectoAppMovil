import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarDoctorPage } from './agregar-doctor.page';

describe('AgregarDoctorPage', () => {
  let component: AgregarDoctorPage;
  let fixture: ComponentFixture<AgregarDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
