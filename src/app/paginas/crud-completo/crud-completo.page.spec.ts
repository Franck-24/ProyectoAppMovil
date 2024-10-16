import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudCompletoPage } from './crud-completo.page';

describe('CrudCompletoPage', () => {
  let component: CrudCompletoPage;
  let fixture: ComponentFixture<CrudCompletoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCompletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
