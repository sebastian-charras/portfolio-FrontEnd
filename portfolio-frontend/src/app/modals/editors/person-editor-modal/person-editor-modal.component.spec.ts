import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditorModalComponent } from './person-editor-modal.component';

describe('PersonEditorModalComponent', () => {
  let component: PersonEditorModalComponent;
  let fixture: ComponentFixture<PersonEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonEditorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
