import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPersonasPage } from './lista-personas.page';

describe('ListaPersonasPage', () => {
  let component: ListaPersonasPage;
  let fixture: ComponentFixture<ListaPersonasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaPersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
