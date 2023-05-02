import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorPersonasPage } from './editor-personas.page';

describe('EditorPersonasPage', () => {
  let component: EditorPersonasPage;
  let fixture: ComponentFixture<EditorPersonasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditorPersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
