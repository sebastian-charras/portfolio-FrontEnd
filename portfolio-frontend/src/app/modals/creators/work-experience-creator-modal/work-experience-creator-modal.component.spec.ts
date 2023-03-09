import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkExperienceCreatorModalComponent} from './work-experience-creator-modal.component';

describe('WorkExperienceCreatorModalComponent', () => {
  let component: WorkExperienceCreatorModalComponent;
  let fixture: ComponentFixture<WorkExperienceCreatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceCreatorModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
