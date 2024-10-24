import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarDoctorPage } from './eliminar-doctor.page';

describe('EliminarDoctorPage', () => {
  let component: EliminarDoctorPage;
  let fixture: ComponentFixture<EliminarDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
