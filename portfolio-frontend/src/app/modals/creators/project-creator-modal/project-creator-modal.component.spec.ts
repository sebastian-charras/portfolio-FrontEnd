import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreatorModalComponent } from './project-creator-modal.component';

describe('ProjectCreatorModalComponent', () => {
  let component: ProjectCreatorModalComponent;
  let fixture: ComponentFixture<ProjectCreatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreatorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
