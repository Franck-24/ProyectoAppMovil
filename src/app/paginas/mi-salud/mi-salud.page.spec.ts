import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiSaludPage } from './mi-salud.page';

describe('MiSaludPage', () => {
  let component: MiSaludPage;
  let fixture: ComponentFixture<MiSaludPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSaludPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
