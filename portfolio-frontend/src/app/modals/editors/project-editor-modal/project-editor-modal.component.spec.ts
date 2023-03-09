import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectEditorModalComponent} from './project-editor-modal.component';

describe('ProjectEditorModalComponent', () => {
  let component: ProjectEditorModalComponent;
  let fixture: ComponentFixture<ProjectEditorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectEditorModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
