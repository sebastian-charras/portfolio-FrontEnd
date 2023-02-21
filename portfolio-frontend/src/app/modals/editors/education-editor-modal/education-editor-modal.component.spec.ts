import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditorModalComponent } from './education-editor-modal.component';

describe('EducationEditorModalComponent', () => {
  let component: EducationEditorModalComponent;
  let fixture: ComponentFixture<EducationEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationEditorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
