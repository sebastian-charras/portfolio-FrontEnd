import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceEditorModalComponent } from './work-experience-editor-modal.component';

describe('WorkExperienceEditorModalComponent', () => {
  let component: WorkExperienceEditorModalComponent;
  let fixture: ComponentFixture<WorkExperienceEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceEditorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
