import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleDoctorPage } from './detalle-doctor.page';

describe('DetalleDoctorPage', () => {
  let component: DetalleDoctorPage;
  let fixture: ComponentFixture<DetalleDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
