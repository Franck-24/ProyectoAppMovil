import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarDoctorPage } from './listar-doctor.page';

describe('ListarDoctorPage', () => {
  let component: ListarDoctorPage;
  let fixture: ComponentFixture<ListarDoctorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
