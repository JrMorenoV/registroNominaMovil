import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AgregarPersonasPage } from './agregar-personas.page';

describe('AgregarPersonasPage', () => {
  let component: AgregarPersonasPage;
  let fixture: ComponentFixture<AgregarPersonasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarPersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
