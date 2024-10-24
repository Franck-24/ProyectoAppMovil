import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDoctorPage } from './editar-doctor.page';

describe('EditarDoctorPage', () => {
  let component: EditarDoctorPage;
  let fixture: ComponentFixture<EditarDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
